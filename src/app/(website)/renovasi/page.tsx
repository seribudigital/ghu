import { client } from '@/sanity/lib/client';
import { RENOVASI_QUERY } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';

export const revalidate = 60;

export default async function RenovasiPage() {
    const portfolios = await client.fetch(RENOVASI_QUERY);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-blue-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-800 opacity-90 z-0"></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0"></div>
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 z-0 hidden"></div> {/* Placeholder removed/hidden */}

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                        Mau Bangun Rumah / Renovasi? <br className="hidden md:block" />
                        <span className="text-yellow-400">Bergaransi, Bisa Dicicil 3 Th</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-blue-100 mb-8">
                        Syaratnya Mudah, DP-nya Kecil. <br />
                        <span className="font-bold text-white mt-2 block">In Sya Allah Kami Bisa Bantu.</span>
                    </p>
                    <a
                        href="https://wa.me/6281234567890?text=Halo, saya ingin konsultasi renovasi rumah."
                        target="_blank"
                        className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition hover:scale-105"
                    >
                        Konsultasi Gratis via WhatsApp
                    </a>
                </div>
            </section>

            {/* Services & Benefits Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* Layanan Kami */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                            <span className="bg-blue-100 p-2 rounded-lg mr-3">🛠️</span>
                            Layanan Kami
                        </h2>
                        <ul className="space-y-3">
                            {[
                                "Bangun Rumah Baru",
                                "Bangun Kontrakan & Kost",
                                "Bangun Ruko / Toko",
                                "Renovasi Dapur & Kamar Mandi",
                                "Perbaikan Atap Bocor & Plafond",
                                "Pengecatan & Pasang Keramik"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start text-gray-700">
                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Keuntungan */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                            <span className="bg-green-100 p-2 rounded-lg mr-3">✅</span>
                            Keuntungan
                        </h2>
                        <ul className="space-y-3">
                            {[
                                "Pengerjaan Cepat & Amanah",
                                "Syarat Mudah Cuma FC KTP",
                                "Garansi Pemeliharaan 1 Tahun",
                                "Gratis Survey Lokasi & RAB",
                                "Tukang Berpengalaman",
                                "Sistem Pembayaran Fleksibel"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start text-gray-700">
                                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Price Simulation Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl shadow-2xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10"></div>

                        <h2 className="text-3xl font-bold mb-8 text-center relative z-10">Simulasi Pembayaran Ringan</h2>

                        <div className="grid md:grid-cols-3 gap-6 text-center relative z-10">
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                                <p className="text-sm uppercase tracking-wider opacity-80 mb-1">Contoh RAB</p>
                                <p className="text-3xl font-bold">100 Juta</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                                <p className="text-sm uppercase tracking-wider opacity-80 mb-1">Cukup DP</p>
                                <p className="text-3xl font-bold text-yellow-300">40 Juta</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                                <p className="text-sm uppercase tracking-wider opacity-80 mb-1">Sisa Dicicil</p>
                                <p className="text-2xl font-bold">Rp 1.667.000</p>
                                <p className="text-xs mt-1">/bulan selama 36 bulan</p>
                            </div>
                        </div>

                        <p className="text-center mt-8 text-sm opacity-80 italic">
                            *Simulasi di atas hanya contoh estimasi. Hubungi kami untuk perhitungan RAB sesuai kebutuhan Anda.
                        </p>
                    </div>
                </div>
            </section>

            {/* Portfolio Gallery Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Portofolio & Hasil Kerja</h2>
                        <p className="mt-4 text-gray-500">Bukti nyata kualitas pengerjaan tim kami.</p>
                    </div>

                    {portfolios.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {portfolios.map((item: any) => (
                                <div key={item._id} className="group relative break-inside-avoid overflow-hidden rounded-xl shadow-lg bg-white">
                                    <div className="relative h-64 w-full overflow-hidden">
                                        {item.mainImage ? (
                                            <Image
                                                src={urlForImage(item.mainImage).url()}
                                                alt={item.title}
                                                fill
                                                className="object-cover transform transition duration-500 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full bg-gray-200 text-gray-400">
                                                No Image
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <h3 className="text-white font-bold text-lg">{item.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
                            <span className="text-4xl block mb-2">🏗️</span>
                            <p className="text-gray-500">Belum ada foto portofolio yang diupload.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
