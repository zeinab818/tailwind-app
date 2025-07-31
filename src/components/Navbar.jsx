import React, { useState } from 'react'

import { Link } from 'react-router-dom';
export default function Navbar() {
    const [open , setOpen] = useState(false);
    function changeOpen(){
        if(open){
            setOpen(false);
        }
        else{
            setOpen(true);
        }
    }

    return (
        <>

            <nav className='bg-blue-950 py-4 px-4 white fixed top-0 left-0 w-full z-50'>
                <div className="container mx-auto">
                    <div className="flex justify-between items-center py-5">
                        <div className="navbar-brand text-2xl">
                        <h1><Link to={'./'}>Start Framework</Link></h1>
                    </div>
                    <div className="list">
                        <ul className='hidden lg:flex justify-between items-center gap-4 text-xl'>
                            <li>
                                <Link to={'./about'}>About</Link>
                            </li>
                            <li>
                                <Link to={'./portfolio'}>Portfolio</Link>
                            </li>
                            <li>
                                <Link to={'./contact'}>Contact</Link>
                            </li>
                        </ul>
                        <div onClick={()=> changeOpen()} className="lg:hidden cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            
                        </div>
                    </div>
                    </div>
                </div>
                {open ? <ul className='space-y-3 mt-2 transition-all duration-50'>
                            <li>
                                <Link to={'./about'}>About</Link>
                            </li>
                            <li>
                                <Link to={'./portfolio'}>Portfolio</Link>
                            </li>
                            <li>
                                <Link to={'./contact'}>Contact</Link>
                            </li>
                        </ul>: ''}
            </nav>

        </>
    )
}
