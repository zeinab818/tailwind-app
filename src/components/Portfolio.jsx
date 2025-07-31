import React, { useState } from 'react';
import pic1 from '../assets/poert1.png';
import pic2 from '../assets/port2.png';
import pic3 from '../assets/port3.png';

export default function Portfolio() {
    const [selectedImg, setSelectedImg] = useState(null);
    const images = [pic1, pic2, pic3, pic3, pic2, pic1];

    function openImage(src) {
        setSelectedImg(src);
    }

    function closeImage() {
        setSelectedImg(null);
    }

    return (
        <div className="portfolio py-20 bg-white">
        <div className="container mx-auto px-4">
            <h1 className="text-3xl uppercase text-center font-bold text-gray-800">portfolio component</h1>

            <div className="flex justify-center items-center my-6">
            <div className="h-1 w-20 bg-blue-950"></div>
            <div className="px-4 text-yellow-500 text-xl">
                <i className="fa-solid fa-star"></i>
            </div>
            <div className="h-1 w-20  bg-blue-950"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {images.map((img, index) => (
                <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => openImage(img)}
                >
                <img src={img} alt="portfolio" className="w-full rounded shadow-md transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/50 bg-opacity-10 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300 rounded">
                    <i className="fa-solid fa-plus text-white text-3xl"></i>
                </div>
                </div>
            ))}
            </div>

            {/* Popup overlay */}
            {selectedImg && (
            <div
                className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
                onClick={closeImage}
            >
                <div className="relative max-w-3xl w-full p-4">
                <img src={selectedImg} alt="popup" className="w-full rounded-lg" />
                <button
                    onClick={closeImage}
                    className="absolute top-5 right-5 cursor-pointer text-white text-2xl "
                >
                    ✖
                </button>
                </div>
            </div>
            )}
        </div>
        </div>
    );
}
