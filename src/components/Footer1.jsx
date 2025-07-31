import React from 'react'

export default function Footer1() {
    return (
        <div className="footer-1 bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            
            {/* Location Section */}
            <div className="flex flex-col items-center">
            <h1 className="uppercase text-lg font-bold mb-2">Location</h1>
            <p>2215 John Daniel Drive</p>
            <p className="pt-2">Clark, MO 65243</p>
            </div>

            {/* Web Section */}
            <div className="flex flex-col items-center">
            <h1 className="uppercase text-lg font-bold mb-2">Around the Web</h1>
            <div className="flex gap-4 text-xl mt-2">
                
                <div className="w-12 h-12 border-2 border-solid rounded-full flex items-center justify-center">
                    <i className="fa-brands fa-facebook text-xl"></i>
                </div>
                <div className="w-12 h-12 border-2 border-solid rounded-full flex items-center justify-center">
                    <i className="fa-brands fa-twitter text-xl"></i>
                </div>
                <div className="w-12 h-12 border-2 border-solid rounded-full flex items-center justify-center">
                    <i className="fa-brands fa-linkedin-in text-xl"></i>
                </div>
                <div className="w-12 h-12 border-2 border-solid rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-globe text-xl"></i>
                </div>



            </div>
            </div>

            {/* Freelancer Info */}
            <div className="flex flex-col items-center">
            <h1 className="uppercase text-lg font-bold mb-2">About Freelancer</h1>
            <p className="max-w-xs">
                Freelance is a free to use, licensed Bootstrap theme created by Route.
            </p>
            </div>
        </div>
        </div>
    )
}
