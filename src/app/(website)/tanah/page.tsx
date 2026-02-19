import { client } from '@/sanity/lib/client';
import { TANAH_QUERY } from '@/sanity/lib/queries';
import PropertyCard from '@/components/PropertyCard';

export const revalidate = 60;

export default async function TanahPage() {
    const properties = await client.fetch(TANAH_QUERY);

    return (
        <div className="min-h-screen py-12 relative">
            <div className="absolute inset-0 bg-topo-pattern opacity-60 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Katalog Tanah Kapling
                    </h1>
                    <p className="mt-4 text-xl text-gray-500">
                        Investasi cerdas untuk masa depan Anda dengan pilihan lokasi strategis.
                    </p>
                </div>

                {properties.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {properties.map((property: any) => (
                            <PropertyCard key={property._id} property={property} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">Belum ada data tanah kapling yang tersedia saat ini.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
