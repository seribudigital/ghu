const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Bpk. Ridwan",
            role: "Cikande",
            content: "Awalnya ragu mau bangun lantai 2 karena budget terbatas. Alhamdulillah ketemu tim Griya Harianto Utama. DP-nya ringan, sisanya bisa dicicil 3 tahun, dan syaratnya cuma KTP. Hasil kerjanya rapi, pokoknya benar-benar terima beres!",
            initial: "R",
            color: "bg-blue-100 text-blue-600",
            rating: 5
        },
        {
            id: 2,
            name: "Ibu Siti Aminah",
            role: "Serang",
            content: "Mencari rumah impian yang legalitasnya aman itu susah-susah gampang. Dibantu oleh tim GHU, prosesnya sangat transparan, legalitas terjamin, dan tidak ada biaya yang ditutup-tutupi. Pelayanannya sangat amanah dan kekeluargaan.",
            initial: "S",
            color: "bg-green-100 text-green-600",
            rating: 5
        },
        {
            id: 3,
            name: "Keluarga Bpk. Lukman",
            role: "Investor",
            content: "Investasi tanah kapling lewat GHU sangat memuaskan. Lokasinya strategis, prospek ke depannya bagus, dan surat-suratnya langsung diurus dengan cepat. Sangat direkomendasikan untuk yang cari aset masa depan.",
            initial: "L",
            color: "bg-yellow-100 text-yellow-600",
            rating: 5
        }
    ];

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-ghu-primary font-semibold tracking-wide uppercase">Kata Mereka</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-ghu-dark sm:text-4xl">
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
                                    <h4 className="text-lg font-bold text-ghu-dark">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    <div className="flex text-yellow-400 mt-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                        ))}
                                    </div>
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
