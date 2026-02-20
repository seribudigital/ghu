import Link from 'next/link';
import Image from 'next/image';
import { urlForImage } from '../sanity/lib/image';

interface PropertyProps {
    property: {
        _id: string;
        title: string;
        slug: { current: string };
        category: string;
        status: string;
        price: number;
        luas: string;
        mainImage: any;
        gallery?: any;
    };
}

const PropertyCard = ({ property }: PropertyProps) => {
    const { title, slug, category, status, price, luas, mainImage, gallery } = property;

    const displayImage = mainImage || (gallery && gallery[0]);

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

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100">
            <div className="relative h-64 w-full bg-gray-200">
                {displayImage ? (
                    <Image
                        src={urlForImage(displayImage).url()}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                        No Image
                    </div>
                )}
                <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${getStatusColor(status)}`}>
                        {status}
                    </span>
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {category}
                    </span>
                    <span className="text-sm text-gray-500 font-medium">
                        {luas}
                    </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    <Link href={`/properti/${slug?.current}`} className="hover:text-blue-600 transition-colors">
                        {title}
                    </Link>
                </h3>
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">
                        {price ? formatRupiah(price) : 'Hubungi Kami'}
                    </span>
                    <Link
                        href={`/properti/${slug?.current}`}
                        className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
                    >
                        Detail <span className="ml-1">&rarr;</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
