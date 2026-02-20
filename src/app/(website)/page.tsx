import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { RECENT_PROPERTIES_QUERY } from '@/sanity/lib/queries';
import PropertyCard from '@/components/PropertyCard';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import CTAContact from '@/components/CTAContact';
import Image from 'next/image';

export const revalidate = 60;

export default async function Home() {
  const recentProperties = await client.fetch(RECENT_PROPERTIES_QUERY);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-ghu-primary text-white pt-24 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-ghu-primary to-[#0f291e] opacity-90"></div>
          {/* Maintained existing pattern class */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <p className="text-ghu-accent font-semibold tracking-widest uppercase mb-4 text-sm md:text-base">
            Amanah dalam Setiap Transaksi, Barokah dalam Setiap Hunian
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Wujudkan Hunian Impian, <br className="hidden md:block" /> <span className="text-ghu-accent">Berkah untuk Keluarga</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-10">
            Rumah bukan sekadar bangunan — ia adalah tempat cinta tumbuh, anak-anak belajar, dan keluarga menemukan kedamaian. Bersama Griya Harianto Utama, kami bantu Anda menemukan hunian yang halal, amanah, dan berkah.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/properti"
              className="px-8 py-4 bg-ghu-accent text-ghu-dark font-bold rounded-lg hover:brightness-110 transition-all shadow-lg text-lg"
            >
              Eksplorasi Properti
            </Link>
            <Link
              href="/renovasi"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-ghu-primary transition-colors shadow-lg text-lg"
            >
              Konsultasi Renovasi
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-ghu-primary font-semibold tracking-wide uppercase">Layanan Kami</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-ghu-dark sm:text-4xl">
              Solusi Lengkap Properti Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1: Jual Beli Rumah */}
            <div id="properties" className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center text-center border border-gray-100">
              <div className="h-16 w-16 bg-green-100 text-ghu-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-ghu-dark mb-3">Jual Beli Rumah</h3>
              <h4 className="text-sm font-semibold text-ghu-primary mb-4 uppercase tracking-wider">Temukan Rumah yang Tepat, di Waktu yang Tepat</h4>
              <p className="text-gray-600 mb-6">
                Kami memahami bahwa membeli rumah adalah keputusan besar dalam hidup. Dengan pengalaman dan dedikasi kami, proses yang tampak rumit akan kami sederhanakan untuk Anda. Insyaallah, bersama kami, Anda tidak hanya mendapatkan rumah — tapi ketenangan pikiran.
              </p>
              <Link href="/properti" className="mt-auto text-ghu-primary font-medium hover:text-ghu-accent flex items-center">
                Lihat Properti <span className="ml-1">&rarr;</span>
              </Link>
            </div>

            {/* Service 2: Tanah Kapling */}
            <div id="land" className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center text-center border border-gray-100">
              <div className="h-16 w-16 bg-green-100 text-ghu-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 7m0 13V7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-ghu-dark mb-3">Penjualan Tanah Kapling</h3>
              <h4 className="text-sm font-semibold text-ghu-primary mb-4 uppercase tracking-wider">Investasi Dunia, Bekal Masa Depan</h4>
              <p className="text-gray-600 mb-6">
                Tanah adalah aset yang tidak pernah menyusut nilainya. Pilih lokasi strategis kami yang legalitas jelas, harga jujur, dan siap bangun — jadikan ia warisan terbaik untuk generasi berikutnya. Karena investasi terbaik adalah yang memberikan manfaat, bukan hanya hari ini, tapi untuk anak cucu kita.
              </p>
              <Link href="/tanah" className="mt-auto text-ghu-primary font-medium hover:text-ghu-accent flex items-center">
                Cek Lokasi <span className="ml-1">&rarr;</span>
              </Link>
            </div>

            {/* Service 3: Jasa Renovasi */}
            <div id="renovation" className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center text-center border border-gray-100">
              <div className="h-16 w-16 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-ghu-dark mb-3">Jasa Renovasi</h3>
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

      {/* Testimonials Section (Social Proof) - Moved UP */}
      <Testimonials />

      {/* Recent Properties Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-base text-ghu-primary font-semibold tracking-wide uppercase">Properti Terbaru</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-ghu-dark sm:text-4xl">
                Hunian & Tanah Pilihan
              </p>
            </div>
            <div className="hidden sm:block">
              <Link href="/properti" className="text-ghu-primary font-medium hover:text-ghu-accent flex items-center">
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
            <div className="text-center py-20 bg-white rounded-lg border border-gray-100">
              <p className="text-gray-500 text-lg">Belum ada properti yang ditambahkan.</p>
            </div>
          )}

          <div className="mt-8 sm:hidden text-center">
            <Link href="/properti" className="text-ghu-primary font-medium hover:text-ghu-accent">
              Lihat Semua Properti &rarr;
            </Link>
          </div>
        </div>
      </section>


      {/* About Us / Why Us Section - Moved DOWN */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ghu-dark mb-8">Tentang Kami</h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-10">
            <blockquote className="text-2xl font-serif italic text-ghu-primary mb-4">
              "Dan Allah menjadikan bagimu rumah-rumahmu sebagai tempat tinggal..."
              <span className="block text-base font-sans font-normal mt-2 text-ghu-accent">(QS. An-Nahl: 80)</span>
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

      {/* CTA Contact Section (WhatsApp) */}
      <CTAContact />

      {/* Location Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ghu-dark mb-8">Lokasi Kantor Kami</h2>
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
