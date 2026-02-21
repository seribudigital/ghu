import { client } from '@/sanity/lib/client';
import { PROPERTY_BY_SLUG_QUERY } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import PropertyGallery from '@/components/PropertyGallery';

export const revalidate = 60;

interface PropertyPageProps {
    params: Promise<{ slug: string }>;
}

export default async function PropertyDetailPage({ params }: PropertyPageProps) {
    const { slug } = await params;
    const property = await client.fetch(PROPERTY_BY_SLUG_QUERY, { slug });

    if (!property) {
        notFound();
    }

    const formatRupiah = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Tersedia':
                return 'bg-green-100 text-green-800';
            case 'Sisa Sedikit':
                return 'bg-yellow-100 text-yellow-800';
            case 'Terjual Habis':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const displayImage = property.mainImage || (property.gallery && property.gallery[0]);

    return (
        <div className="bg-white min-h-screen pb-12">
            {/* Hero Image */}
            <div className="relative w-full h-[50vh] md:h-[65vh] max-h-[700px] bg-[#FAF7F2] flex items-center justify-center overflow-hidden">
                {displayImage ? (
                    <Image
                        src={urlForImage(displayImage).url()}
                        alt={property.title}
                        fill
                        className="w-full h-full object-contain relative z-10"
                        priority
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                        No Image Available
                    </div>
                )}
            </div>

            {/* Back Button Overlay */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-16 mb-6">
                <Link
                    href={property.category === 'Tanah Kapling' ? '/tanah' : '/properti'}
                    className="inline-flex items-center text-sm font-bold bg-white/95 backdrop-blur-md text-ghu-primary px-5 py-2.5 rounded-full shadow-lg hover:bg-ghu-primary hover:text-white transition-all border border-gray-100"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Kembali ke {property.category === 'Tanah Kapling' ? 'Katalog Tanah' : 'Daftar Properti'}
                </Link>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white rounded-xl shadow-xl p-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className={`px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide ${getStatusColor(property.status)}`}>
                                    {property.status}
                                </span>
                                <span className="text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full text-sm">
                                    {property.category}
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                                {property.title}
                            </h1>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <p className="text-3xl font-bold text-gray-900">
                                {property.price ? formatRupiah(property.price) : 'Hubungi Kami'}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="md:col-span-2">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Deskripsi</h2>
                            <div className="prose prose-blue max-w-none text-gray-600">
                                {property.description ? (
                                    <PortableText value={property.description} />
                                ) : (
                                    <p>Tidak ada deskripsi tersedia.</p>
                                )}
                            </div>
                        </div>

                        <div className="md:col-span-1">
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Spesifikasi</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="text-gray-500">Luas</span>
                                        <span className="font-semibold text-gray-900">{property.luas || '-'}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="text-gray-500">Kategori</span>
                                        <span className="font-semibold text-gray-900">{property.category}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="text-gray-500">Status</span>
                                        <span className="font-semibold text-gray-900">{property.status}</span>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <Link
                                        href={`https://wa.me/628815627338?text=Halo, saya tertarik dengan properti: ${property.title}`}
                                        target="_blank"
                                        className="w-full block text-center bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors shadow-lg"
                                    >
                                        Hubungi Agen via WhatsApp
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gallery Section */}
                    {property.gallery && property.gallery.length > 0 && (
                        <PropertyGallery gallery={property.gallery} title={property.title} />
                    )}
                </div>
            </div>
        </div>
    );
}
