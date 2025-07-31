import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function submit(e) {
        e.preventDefault();
        const { name, email, age, password } = formData;

        if (!name || !email || !age || !password) {
            setError('Please fill in all fields');
            setSuccess('');
        } else {
            setError('');
            setSuccess('Message sent successfully! 🎉');
            setFormData({
                name: '',
                email: '',
                age: '',
                password: ''
            });
        }
    }

    return (
        <>
            <div className="contact py-10">
                <div className="container mx-auto flex flex-col items-center">
                    <h1 className="text-3xl font-bold uppercase text-center">Contact Section</h1>

                    <div className="flex items-center justify-center py-5">
                        <div className="h-1 w-20 bg-blue-950"></div>
                        <div className="px-4 text-xl text-yellow-500">
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="h-1  w-20 bg-blue-950"></div>
                    </div>

                    <div className="w-full max-w-xl">
                        <form onSubmit={submit} className="space-y-5 ">
                            <div>
                                <label htmlFor="floatingName" className="block mb-1 text-gray-700 font-semibold">User Name</label>
                                <input
                                    type="text"
                                    id="floatingName"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-gray-100 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="floatingInput" className="block mb-1 text-gray-700 font-semibold">User Email</label>
                                <input
                                    type="email"
                                    id="floatingInput"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4  bg-gray-100 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="floatingAge" className="block mb-1 text-gray-700 font-semibold">User Age</label>
                                <input
                                    type="number"
                                    id="floatingAge"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    className="w-full px-4 bg-gray-100  py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="floatingPassword" className="block mb-1 text-gray-700 font-semibold">User Password</label>
                                <input
                                    type="password"
                                    id="floatingPassword"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="bg-gray-100 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {error && <p className="text-red-600">{error}</p>}
                            {success && <p className="text-green-600">{success}</p>}

                            <button
                                type="submit"
                                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
