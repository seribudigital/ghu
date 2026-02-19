const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Bapak Budi & Keluarga",
            role: "Pembeli Rumah Type 45",
            content: "Alhamdulillah, prosesnya sangat mudah dan transparan. Tim Griya Harianto Utama sangat amanah, menjelaskan semua detail legalitas dengan sabar. Sekarang kami sudah menempati rumah impian kami.",
            initial: "B",
            color: "bg-blue-100 text-blue-600"
        },
        {
            id: 2,
            name: "Ibu Siti Aminah",
            role: "Imvestor Tanah Kapling",
            content: "Investasi tanah di sini sangat menguntungkan. Lokasinya strategis dan perkembangannya cepat. Saya beli tahun lalu, sekarang nilainya sudah naik signifikan. Sangat direkomendasikan!",
            initial: "S",
            color: "bg-green-100 text-green-600"
        },
        {
            id: 3,
            name: "Keluarga Pak Rahmat",
            role: "Klien Jasa Renovasi",
            content: "Renovasi rumah tua kami hasilnya luar biasa. Tukangnya rapi, kerjanya cepat, dan biayanya sesuai anggaran. Terima kasih Griya Harianto Utama sudah membuat rumah kami nyaman kembali.",
            initial: "R",
            color: "bg-yellow-100 text-yellow-600"
        }
    ];

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Kata Mereka</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Kepercayaan Keluarga Indonesia
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-6">
                                <div className={`h-12 w-12 rounded-full flex items-center justify-center font-bold text-xl ${testimonial.color}`}>
                                    {testimonial.initial}
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">"{testimonial.content}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
