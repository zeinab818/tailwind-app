import React from 'react'

import { Outlet } from 'react-router-dom'

import Footer2 from './Footer2';
import Navbar from './Navbar';
import Footer1 from './Footer1';



export default function Layout() {
    return (
        <>
            <main className='min-h-screen'>
                
                    <Navbar/>
                    <div className="min-h-[80vh] mt-26 bg-gray-300">
                        <Outlet></Outlet>
                    </div>
                    <Footer1/>
                    <Footer2/>
            </main>
        
        </>
    )
}
