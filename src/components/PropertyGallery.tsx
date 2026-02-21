'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

interface PropertyGalleryProps {
    gallery: any[];
    title: string;
}

export default function PropertyGallery({ gallery, title }: PropertyGalleryProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    const openModal = (index: number) => {
        setCurrentIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentIndex(null);
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (currentIndex !== null) {
            setCurrentIndex((prev) => (prev! === gallery.length - 1 ? 0 : prev! + 1));
        }
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (currentIndex !== null) {
            setCurrentIndex((prev) => (prev! === 0 ? gallery.length - 1 : prev! - 1));
        }
    };

    if (!gallery || gallery.length === 0) return null;

    return (
        <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Galeri Foto</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {gallery.map((image: any, index: number) => (
                    <div
                        key={image._key || index}
                        className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#FAF7F2] cursor-pointer group"
                        onClick={() => openModal(index)}
                    >
                        <Image
                            src={urlForImage(image).url()}
                            alt={image.caption || `Galeri foto ${title} ${index + 1}`}
                            fill
                            className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 50vw, 33vw"
                        />
                        {image.caption && (
                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-white text-xs backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                {image.caption}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Lightbox Modal via Portal */}
            {isMounted && isModalOpen && currentIndex !== null && createPortal(
                <div
                    className="fixed inset-0 z-[99999] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <button
                        className="fixed top-4 right-4 md:top-6 md:right-6 z-[99999] text-white bg-black/50 hover:bg-black/80 rounded-full w-12 h-12 flex items-center justify-center text-3xl transition-colors shadow-lg"
                        onClick={(e) => { e.stopPropagation(); closeModal(); }}
                        aria-label="Tutup Galeri"
                    >
                        &times;
                    </button>

                    {/* Prev Button */}
                    <button
                        className="fixed left-4 top-1/2 -translate-y-1/2 z-[99999] text-white text-4xl hover:text-gray-300 p-2 bg-black/50 rounded-full focus:outline-none"
                        onClick={handlePrev}
                        aria-label="Foto Sebelumnya"
                    >
                        &#10094;
                    </button>

                    {/* Next Button */}
                    <button
                        className="fixed right-4 top-1/2 -translate-y-1/2 z-[99999] text-white text-4xl hover:text-gray-300 p-2 bg-black/50 rounded-full focus:outline-none"
                        onClick={handleNext}
                        aria-label="Foto Selanjutnya"
                    >
                        &#10095;
                    </button>

                    <div
                        className="relative max-w-4xl w-full h-[80vh] flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-[70vh]">
                            <Image
                                src={urlForImage(gallery[currentIndex]).url()}
                                alt={gallery[currentIndex].caption || `Foto Galeri diperbesar`}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        {gallery[currentIndex].caption && (
                            <div className="mt-4 text-center">
                                <p className="text-white text-sm md:text-base font-medium bg-black/50 px-4 py-2 rounded-full inline-block">
                                    {gallery[currentIndex].caption}
                                </p>
                            </div>
                        )}
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
}
