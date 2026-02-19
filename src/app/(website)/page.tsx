import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { RECENT_PROPERTIES_QUERY } from '@/sanity/lib/queries';
import PropertyCard from '@/components/PropertyCard';

export const revalidate = 60;

export default async function Home() {
  const recentProperties = await client.fetch(RECENT_PROPERTIES_QUERY);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
          {/* Placeholder for Hero Image if needed in future */}
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Wujudkan Properti Impian Bersama <span className="text-yellow-400">Griya Harianto Utama</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
            Mitra terpercaya untuk jual beli rumah, tanah kapling, dan jasa renovasi hunian Anda dengan kualitas terbaik dan harga kompetitif.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/properti"
              className="px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors shadow-lg text-lg"
            >
              Eksplorasi Properti
            </Link>
            <Link
              href="/renovasi"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-900 transition-colors shadow-lg text-lg"
            >
              Konsultasi Renovasi
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Layanan Kami</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Solusi Lengkap Properti Anda
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Kami menyediakan berbagai layanan profesional untuk memenuhi segala kebutuhan properti dan hunian Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1: Jual Beli Rumah */}
            <div id="properties" className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Jual Beli Rumah</h3>
              <p className="text-gray-600">
                Temukan rumah impian Anda dari daftar properti eksklusif kami, atau percayakan penjualan properti Anda kepada kami dengan proses yang transparan.
              </p>
              <Link href="/properti" className="mt-6 text-blue-600 font-medium hover:text-blue-800 flex items-center">
                Lihat Properti <span className="ml-1">&rarr;</span>
              </Link>
            </div>

            {/* Service 2: Tanah Kapling */}
            <div id="land" className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 7m0 13V7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Penjualan Tanah Kapling</h3>
              <p className="text-gray-600">
                Investasi cerdas dengan pilihan tanah kapling strategis di lokasi berkembang. Legalitas aman dan siap bangun untuk masa depan.
              </p>
              <Link href="/tanah" className="mt-6 text-green-600 font-medium hover:text-green-800 flex items-center">
                Cek Lokasi <span className="ml-1">&rarr;</span>
              </Link>
            </div>

            {/* Service 3: Jasa Renovasi */}
            <div id="renovation" className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Jasa Renovasi</h3>
              <p className="text-gray-600">
                Layanan renovasi profesional untuk mempercantik hunian Anda. Dari perbaikan kecil hingga renovasi total dengan tim berpengalaman.
              </p>
              <Link href="/renovasi" className="mt-6 text-yellow-600 font-medium hover:text-yellow-800 flex items-center">
                Konsultasi Gratis <span className="ml-1">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Properties Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Properti Terbaru</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Hunian & Tanah Pilihan
              </p>
            </div>
            <div className="hidden sm:block">
              <Link href="/properti" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                Lihat Semua Properti <span className="ml-1">&rarr;</span>
              </Link>
            </div>
          </div>

          {recentProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentProperties.map((property: any) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-lg border border-gray-100">
              <p className="text-gray-500 text-lg">Belum ada properti yang ditambahkan.</p>
            </div>
          )}

          <div className="mt-8 sm:hidden text-center">
            <Link href="/properti" className="text-blue-600 font-medium hover:text-blue-800">
              Lihat Semua Properti &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
