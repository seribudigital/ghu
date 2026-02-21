import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const title = formData.get('title') as string;
        const slug = formData.get('slug') as string;
        const category = formData.get('category') as string;

        const priceValue = formData.get('price');
        const price = priceValue ? Number(priceValue) : undefined;

        const status = formData.get('status') as string | undefined;
        const luas = formData.get('luas') as string | undefined;
        const description = formData.get('description') as string;
        const image = formData.get('image') as File | null;

        let mainImageRef = undefined;

        if (image && image.size > 0) {
            // Convert File to Buffer
            const arrayBuffer = await image.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            // Upload image to Sanity
            const asset = await client.assets.upload('image', buffer, {
                filename: image.name,
            });

            mainImageRef = {
                _type: 'image',
                asset: {
                    _type: 'reference',
                    _ref: asset._id,
                }
            };
        }

        const galleryCountStr = formData.get('galleryCount') as string | null;
        const galleryCount = galleryCountStr ? parseInt(galleryCountStr, 10) : 0;

        const galleryArray = [];
        for (let i = 0; i < galleryCount; i++) {
            const file = formData.get(`galleryFile_${i}`) as File | null;
            const caption = formData.get(`galleryCaption_${i}`) as string | null;

            if (file && file.size > 0) {
                const arrayBuffer = await file.arrayBuffer();
                const buffer = Buffer.from(arrayBuffer);

                const asset = await client.assets.upload('image', buffer, {
                    filename: file.name,
                });

                galleryArray.push({
                    _key: crypto.randomUUID(),
                    _type: 'image',
                    asset: {
                        _type: 'reference',
                        _ref: asset._id,
                    },
                    caption: caption || '',
                });
            }
        }

        const formattedDescription = description ? [
            {
                _type: 'block',
                _key: crypto.randomUUID(),
                style: 'normal',
                markDefs: [],
                children: [
                    {
                        _type: 'span',
                        _key: crypto.randomUUID(),
                        text: description,
                        marks: []
                    }
                ]
            }
        ] : undefined;

        const doc = {
            _type: 'property',
            title,
            slug: {
                _type: 'slug',
                current: slug,
            },
            category,
            price: price ? price : undefined,
            status: status ? status : undefined,
            luas: luas ? luas : undefined,
            description: formattedDescription,
            ...(mainImageRef && { mainImage: mainImageRef }),
            ...(galleryArray.length > 0 && { gallery: galleryArray }),
        };

        const response = await client.create(doc);

        return NextResponse.json({ success: true, data: response });
    } catch (error) {
        console.error('Error creating property in Sanity:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to create property segment.', message: error instanceof Error ? error.message : 'Unknown error' },
            { status: 400 }
        );
    }
}
