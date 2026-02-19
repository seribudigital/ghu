import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { RECENT_PROPERTIES_QUERY } from '@/sanity/lib/queries';
import PropertyCard from '@/components/PropertyCard';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';

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
          <p className="text-yellow-300 font-semibold tracking-widest uppercase mb-4 text-sm md:text-base">
            Amanah dalam Setiap Transaksi, Barokah dalam Setiap Hunian
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Wujudkan Hunian Impian, <br className="hidden md:block" /> <span className="text-yellow-400">Berkah untuk Keluarga</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-10">
            Rumah bukan sekadar bangunan — ia adalah tempat cinta tumbuh, anak-anak belajar, dan keluarga menemukan kedamaian. Bersama Griya Harianto Utama, kami bantu Anda menemukan hunian yang halal, amanah, dan berkah.
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

      {/* Stats Section */}
      <Stats />

      {/* About Us / Why Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tentang Kami</h2>
          <div className="bg-blue-50 p-8 rounded-2xl shadow-sm border border-blue-100 mb-10">
            <blockquote className="text-2xl font-serif italic text-blue-800 mb-4">
              "Dan Allah menjadikan bagimu rumah-rumahmu sebagai tempat tinggal..."
              <span className="block text-base font-sans font-normal mt-2 text-blue-600">(QS. An-Nahl: 80)</span>
            </blockquote>
          </div>

          <div className="text-lg text-gray-700 space-y-6 leading-relaxed text-justify sm:text-center">
            <p>
              Ayat ini mengingatkan kami bahwa rumah adalah nikmat besar dari Allah. Itulah mengapa kami hadir dengan penuh tanggung jawab — bukan sekadar menjual properti, tapi membantu Anda menemukan tempat yang layak untuk keluarga Anda bertumbuh dan beribadah.
            </p>
            <p>
              Griya Harianto Utama berdiri di atas prinsip kejujuran, amanah, dan profesionalisme. Setiap transaksi kami jaga agar transparan, legalitas aman, dan proses mudah — karena kami percaya, bisnis yang barokah lahir dari niat dan cara yang benar.
            </p>
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
              <h4 className="text-sm font-semibold text-blue-600 mb-4 uppercase tracking-wider">Temukan Rumah yang Tepat, di Waktu yang Tepat</h4>
              <p className="text-gray-600 mb-6">
                Kami memahami bahwa membeli rumah adalah keputusan besar dalam hidup. Dengan pengalaman dan dedikasi kami, proses yang tampak rumit akan kami sederhanakan untuk Anda. Insyaallah, bersama kami, Anda tidak hanya mendapatkan rumah — tapi ketenangan pikiran.
              </p>
              <Link href="/properti" className="mt-auto text-blue-600 font-medium hover:text-blue-800 flex items-center">
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
              <h4 className="text-sm font-semibold text-green-600 mb-4 uppercase tracking-wider">Investasi Dunia, Bekal Masa Depan</h4>
              <p className="text-gray-600 mb-6">
                Tanah adalah aset yang tidak pernah menyusut nilainya. Pilih lokasi strategis kami yang legalitas jelas, harga jujur, dan siap bangun — jadikan ia warisan terbaik untuk generasi berikutnya. Karena investasi terbaik adalah yang memberikan manfaat, bukan hanya hari ini, tapi untuk anak cucu kita.
              </p>
              <Link href="/tanah" className="mt-auto text-green-600 font-medium hover:text-green-800 flex items-center">
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
              <h4 className="text-sm font-semibold text-yellow-600 mb-4 uppercase tracking-wider">Rumah yang Nyaman adalah Rumah yang Bersyukur</h4>
              <p className="text-gray-600 mb-6">
                Setiap sudut rumah Anda layak untuk dirawat dan dipercantik. Kami hadir dengan tim berpengalaman, bahan berkualitas, dan hasil yang rapi — agar setiap kali Anda pulang ke rumah, hati terasa tentram dan lisan spontan mengucap Alhamdulillah.
              </p>
              <Link href="/renovasi" className="mt-auto text-yellow-600 font-medium hover:text-yellow-800 flex items-center">
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

      {/* Testimonials Section */}
      <Testimonials />

      {/* CONTACT CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white text-center px-4 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-64 h-64 bg-yellow-400 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-green-400 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative max-w-4xl mx-auto z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Mari Bicara, Kami Siap Membantu dengan Sepenuh Hati</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Konsultasi gratis, tanpa tekanan. Kami percaya rezeki sudah diatur oleh Allah — tugas kami hanyalah melayani Anda dengan sebaik-baiknya. Hubungi kami sekarang, dan biarkan kami menemani langkah Anda menuju hunian impian.
          </p>
          <a
            href="https://wa.me/628815627338"
            target="_blank"
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-10 rounded-full shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl group"
          >
            <svg className="w-6 h-6 mr-3 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Hubungi via WhatsApp
          </a>
          <p className="mt-6 text-sm opacity-70">
            0881-5627-338
          </p>
        </div>
      </section>
      {/* Location Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Lokasi Kantor Kami</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.2084886649104!2d106.20391837498947!3d-6.1026018938838344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e41f458420325a9%3A0x4713fb1363d15521!2sMasjid%20Imam%20Syafi&#39;i!5e0!3m2!1sid!2sid!4v1771473166158!5m2!1sid!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="mt-6 text-gray-600">
            Jl. DLLAJ Pakupatan, Kasemen, Kec. Serang, Kota Serang, Banten
          </p>
        </div>
      </section>
    </div>
  );
}
