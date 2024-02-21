'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className='flex justify-between text-center w-screen text-xl font-bold sticky top-0 z-50 left-0 backdrop-blur-lg md:px-5 xl:px-36'>
            <div className="flex items-center gap-5 ml-2">
                <Link href='#inicio'><Image src={'/vetor.png'} alt={'vetor'} width={70} height={70} /></Link>
            </div>
            <nav className='hidden lg:flex items-center gap-5 text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                <Link href='#about-me' onClick={handleCloseMenu}>
                    About Me
                </Link>
                <Link href='#projects' onClick={handleCloseMenu}>
                    Projects
                </Link>
                <Link href='#contact' onClick={handleCloseMenu}>
                    Contact
                </Link>
            </nav>
            <button className="px-2 lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                <i className="bi bi-list icons text-3xl text-white"></i>
            </button>
            {isOpen && (
                <div className="flex flex-col gap-3 lg:hidden absolute right-0 top-full bg-custom-gray text-white w-full backdrop-blur-lg">
                    <Link href='#about-me' onClick={handleCloseMenu}>
                        About Me
                    </Link>
                    <Link href='#projects' onClick={handleCloseMenu}>
                        Projects
                    </Link>
                    <Link href='#contact' onClick={handleCloseMenu}>
                        Contact
                    </Link>
                </div>
            )}
        </header>
    );
}
