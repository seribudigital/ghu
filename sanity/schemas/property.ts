import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'property',
    title: 'Property',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Nama Properti',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Kategori',
            type: 'string',
            options: {
                list: [
                    { title: 'Rumah', value: 'Rumah' },
                    { title: 'Tanah Kapling', value: 'Tanah Kapling' },
                    { title: 'Renovasi', value: 'Renovasi' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Tersedia', value: 'Tersedia' },
                    { title: 'Sisa Sedikit', value: 'Sisa Sedikit' },
                    { title: 'Terjual Habis', value: 'Terjual Habis' },
                ],
            },
            initialValue: 'Tersedia',
            hidden: ({ document }) => document?.category === 'Renovasi',
        }),
        defineField({
            name: 'price',
            title: 'Harga',
            type: 'number',
            hidden: ({ document }) => document?.category === 'Renovasi',
        }),
        defineField({
            name: 'luas',
            title: 'Luas Tanah/Bangunan',
            type: 'string',
            description: 'Contoh: 72m2 / 45m2',
            hidden: ({ document }) => document?.category === 'Renovasi',
        }),
        defineField({
            name: 'mainImage',
            title: 'Foto Utama',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                }
            ]
        }),
        defineField({
            name: 'description',
            title: 'Deskripsi',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                    lists: [],
                },
            ],
        }),
        defineField({
            name: 'gallery',
            title: 'Galeri Foto',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                        },
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative Text',
                        }
                    ]
                }
            ],
            options: {
                layout: 'grid',
            },
        }),
    ],
})
