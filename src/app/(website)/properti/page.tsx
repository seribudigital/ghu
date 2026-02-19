import { client } from '@/sanity/lib/client';
import { RUMAH_QUERY } from '@/sanity/lib/queries';
import PropertyCard from '@/components/PropertyCard';

export const revalidate = 60; // ISR: Revalidate every 60 seconds

export default async function PropertyPage() {
    const properties = await client.fetch(RUMAH_QUERY);

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Katalog Properti
                    </h1>
                    <p className="mt-4 text-xl text-gray-500">
                        Temukan hunian impian dan investasi properti terbaik Anda di sini.
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
                        <p className="text-gray-500 text-lg">Belum ada properti yang tersedia saat ini.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
