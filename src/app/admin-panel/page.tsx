"use client";

import React, { useState } from "react";

export default function AdminPanelPage() {
    // State management for form data
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [category, setCategory] = useState("Rumah");
    const [price, setPrice] = useState("");
    const [status, setStatus] = useState("");
    const [luas, setLuas] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [gallery, setGallery] = useState<{ file: File | null, caption: string }[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");
    const [submitError, setSubmitError] = useState("");

    // Auth state
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [inputPin, setInputPin] = useState('');
    const [pinError, setPinError] = useState(false);

    // Handle file input
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]);
        }
    };

    // Submit handler
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage("");
        setSubmitError("");

        try {
            const data = new FormData();
            data.append("title", title);
            data.append("slug", slug);
            data.append("category", category);

            if (category !== "Renovasi") {
                if (price) data.append("price", price);
                if (status) data.append("status", status);
                if (luas) data.append("luas", luas);
            }

            data.append("description", description);
            if (image) {
                data.append("image", image);
            }

            data.append("galleryCount", gallery.length.toString());
            gallery.forEach((item, index) => {
                if (item.file) {
                    data.append(`galleryFile_${index}`, item.file);
                    data.append(`galleryCaption_${index}`, item.caption);
                }
            });

            const res = await fetch("/api/properties", {
                method: "POST",
                body: data,
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message || result.error || "Terjadi kesalahan saat menyimpan data. Cek kembali isian form.");
            }

            if (res.ok && result.success) {
                setMessage("Data berhasil disimpan!");
                // Reset form
                setTitle("");
                setSlug("");
                setCategory("Rumah");
                setPrice("");
                setStatus("");
                setLuas("");
                setDescription("");
                setImage(null);
                setGallery([]);
            } else {
                setSubmitError(result.message || result.error || "Gagal menyimpan data.");
            }
        } catch (error) {
            console.error("Submit error:", error);
            setSubmitError(error instanceof Error ? error.message : "Terjadi kesalahan sistem saat menyimpan data.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const showPropertyDetails = category !== "Renovasi";

    // Handle Login
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputPin === process.env.NEXT_PUBLIC_ADMIN_PIN) {
            setIsAuthenticated(true);
            setPinError(false);
        } else {
            setPinError(true);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center p-6 text-gray-800">
                <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-sm">
                    <h2 className="text-2xl font-bold text-ghu-primary mb-6 text-center">
                        Akses Dasbor Admin
                    </h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <input
                                type="password"
                                value={inputPin}
                                onChange={(e) => setInputPin(e.target.value)}
                                placeholder="Masukkan PIN"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A853] focus:border-transparent outline-none transition text-center text-xl tracking-widest"
                                required
                            />
                        </div>
                        {pinError && (
                            <p className="text-red-500 text-sm text-center font-semibold">
                                PIN yang Anda masukkan salah!
                            </p>
                        )}
                        <button
                            type="submit"
                            className="w-full py-3 bg-ghu-accent text-[#2C2C2C] font-bold text-lg rounded-lg hover:brightness-110 active:scale-95 transition duration-200 shadow-md"
                        >
                            Masuk
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center p-6 text-gray-800">
            <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl">
                <h1 className="text-2xl font-bold text-[#2C2C2C] mb-6 text-center">
                    Input Properti & Renovasi
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Judul & Slug */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Judul Formulir
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                    const newSlug = e.target.value.toLowerCase().trim().replace(/[\s\W-]+/g, '-');
                                    setSlug(newSlug);
                                }}
                                placeholder="Masukkan judul properti/renovasi"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A853] focus:border-transparent outline-none transition"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Slug URL
                            </label>
                            <input
                                type="text"
                                value={slug}
                                readOnly
                                placeholder="contoh-slug-properti"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed text-gray-500 outline-none transition"
                                required
                            />
                        </div>
                    </div>

                    {/* Kategori */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Kategori
                        </label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A853] focus:border-transparent outline-none transition bg-white"
                        >
                            <option value="Rumah">Rumah</option>
                            <option value="Tanah Kapling">Tanah Kapling</option>
                            <option value="Renovasi">Renovasi</option>
                        </select>
                    </div>

                    {/* Conditional Fields: Harga, Status, Luas, Kamar */}
                    {showPropertyDetails && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-gray-100 bg-gray-50 rounded-lg">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Harga
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    placeholder="500000000 (Hanya Angka)"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A853] focus:border-transparent outline-none transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Status
                                </label>
                                <select
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A853] focus:border-transparent outline-none transition bg-white"
                                >
                                    <option value="">Pilih Status</option>
                                    <option value="Tersedia">Tersedia</option>
                                    <option value="Terjual">Terjual</option>
                                    <option value="Disewakan">Disewakan</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Luas
                                </label>
                                <input
                                    type="text"
                                    value={luas}
                                    onChange={(e) => setLuas(e.target.value)}
                                    placeholder="Misal: 100 m²"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A853] focus:border-transparent outline-none transition"
                                />
                            </div>
                        </div>
                    )}

                    {/* Upload Foto Utama */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Upload Foto Utama
                        </label>
                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-3 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Klik untuk upload</span> atau drag and drop</p>
                                    <p className="text-xs text-gray-500">PNG, JPG atau WEBP (MAX. 2MB)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                            </label>
                        </div>
                        {image && (
                            <p className="mt-2 text-sm text-[#D4A853]">File terpilih: {image.name}</p>
                        )}
                    </div>

                    {/* Deskripsi */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Deskripsi
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Berikan deskripsi lengkap mengenai properti atau detail renovasi..."
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A853] focus:border-transparent outline-none transition resize-none"
                            required
                        ></textarea>
                    </div>

                    {/* Galeri Foto */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Galeri Foto (Opsional)
                        </label>
                        <div className="space-y-4">
                            {gallery.map((item, index) => (
                                <div key={index} className="flex flex-col md:flex-row gap-4 items-start md:items-center bg-gray-50 p-4 border border-gray-200 rounded-lg">
                                    <div className="flex-1 w-full">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                if (e.target.files && e.target.files[0]) {
                                                    const newGallery = [...gallery];
                                                    newGallery[index].file = e.target.files[0];
                                                    setGallery(newGallery);
                                                }
                                            }}
                                            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#D4A853] file:text-[#2C2C2C] hover:file:bg-[#c49843] transition"
                                        />
                                    </div>
                                    <div className="flex-1 w-full">
                                        <input
                                            type="text"
                                            placeholder="Caption foto..."
                                            value={item.caption}
                                            onChange={(e) => {
                                                const newGallery = [...gallery];
                                                newGallery[index].caption = e.target.value;
                                                setGallery(newGallery);
                                            }}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A853] focus:border-transparent outline-none transition"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            const newGallery = gallery.filter((_, i) => i !== index);
                                            setGallery(newGallery);
                                        }}
                                        className="text-red-500 hover:text-red-700 font-semibold text-sm px-2 transition"
                                    >
                                        Hapus
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={() => setGallery([...gallery, { file: null, caption: "" }])}
                                className="w-full py-2 border-2 border-dashed border-[#D4A853] text-[#D4A853] font-semibold rounded-lg hover:bg-yellow-50 transition"
                            >
                                + Tambah Foto Galeri
                            </button>
                        </div>
                    </div>

                    {/* Error Message */}
                    {submitError && (
                        <div className="bg-red-100 text-red-700 p-3 rounded-lg text-center font-semibold mb-4">
                            {submitError}
                        </div>
                    )}

                    {/* Success Message */}
                    {message && !submitError && (
                        <div className="bg-green-100 text-green-700 p-4 rounded-lg text-center font-semibold mb-4">
                            {message}
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 font-bold text-lg rounded-lg transition duration-200 shadow-md ${isSubmitting
                            ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                            : "bg-[#D4A853] text-[#2C2C2C] hover:bg-[#c49843] active:bg-[#b0883b]"
                            }`}
                    >
                        {isSubmitting ? "Menyimpan..." : "Simpan Data"}
                    </button>
                </form>
            </div>
        </div>
    );
}
