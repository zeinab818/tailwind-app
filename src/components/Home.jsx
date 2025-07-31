import React from 'react'
import HomePic from '../assets/avataaars.svg'

export default function Home() {
    return (
        <div className="home text-center py-10">
            <div className="container mx-auto flex flex-col items-center">
                <div className="images w-1/4 py-4 flex justify-center">
                    <img src={HomePic} alt="home" className="w-3/4" />
                </div>

                <div className="content">
                    <h1 className="uppercase text-3xl font-bold text-gray-800">start Framework</h1>
                </div>

                <div className="star flex flex-row items-center justify-center py-4">
                    <div className="line h-1 w-24 bg-blue-950"></div>
                    <div className="icon px-4 text-yellow-500 text-xl">
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="line h-1 w-24 bg-blue-950"></div>
                </div>

                <div className="dd py-3">
                    <p className="text-gray-600">Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </div>
    )
}
