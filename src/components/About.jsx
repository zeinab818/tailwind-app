import React from 'react';

export default function About() {
    return (
        <div className="about py-20 ">
            <div className="container mx-auto flex flex-col items-center justify-center px-4">
                <h1 className="uppercase text-center text-3xl font-bold text-gray-800">about component</h1>

                <div className="star flex flex-row items-center justify-center my-6">
                    <div className="h-1 w-20 bg-blue-950"></div>
                    <div className="icon px-4 text-yellow-500 text-xl">
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="h-1 w-20 bg-blue-950"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 px-4">
                    <div className="inner text-gray-700 text-lg">
                        <p>
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete
                            source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                    <div className="inner text-gray-700 text-lg">
                        <p>
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete
                            source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
