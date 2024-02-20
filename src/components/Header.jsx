'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='flex justify-between text-center w-screen text-xl font-bold sticky top-0 z-50 left-0 backdrop-blur-lg md:px-5 xl:px-36'>
            <div className="flex items-center gap-5 ml-2">
                <Image src={'/vetor.png'} alt={'vetor'} width={70} height={70} />
            </div>
            <nav className='hidden md:flex items-center gap-5 text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                <Link href='/'>
                    About Me
                </Link>
                <Link href='/'>
                    Projects
                </Link>
                <Link href='/'>
                    Contact
                </Link>
            </nav>
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                <i className="bi bi-list icons text-3xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"></i>
            </button>
            {isOpen && (
                <div className="flex flex-col gap-3 md:hidden absolute right-0 top-full bg-gray-100 w-full">
                    <Link href='/'>
                        About Me
                    </Link>
                    <Link href='/'>
                        Projects
                    </Link>
                    <Link href='/'>
                        Contact
                    </Link>
                </div>
            )}
        </header>
    );
}
