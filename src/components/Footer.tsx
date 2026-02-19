const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Griya Harianto Utama</h3>
                        <p className="text-gray-400">
                            Mitra terpercaya Anda dalam mewujudkan hunian impian. Kami melayani jual beli rumah, tanah kapling, dan jasa renovasi dengan profesionalisme tinggi.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Layanan</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a href="/properti" className="hover:text-white transition-colors">Jual Beli Rumah</a>
                            </li>
                            <li>
                                <a href="/tanah" className="hover:text-white transition-colors">Tanah Kapling</a>
                            </li>
                            <li>
                                <a href="/renovasi" className="hover:text-white transition-colors">Jasa Renovasi</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Hubungi Kami</h3>
                        <div className="space-y-2 text-gray-400">
                            <p>Jl. DLLAJ Pakupatan, Kasemen, Kec. Serang, Kota Serang, Banten</p>
                            <p>Email: info@griyahariantoutama.com</p>
                            <p>Telepon/WA: 0881-5627-338</p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Griya Harianto Utama. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
