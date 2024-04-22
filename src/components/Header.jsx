'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


export default function Header() {
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setIsSmallScreen(true)
        } else {
            setIsSmallScreen(false)
        }
    }, [])

    return (
        <header className='flex justify-between text-center w-screen text-xl font-bold sticky top-0 z-50 left-0 backdrop-blur-lg md:px-5 xl:px-36'>
            <div className="flex items-center gap-5 ml-2">
                <Link href='#inicio'><Image src={'/vetor.png'} alt={'vetor'} width={70} height={70} /></Link>
            </div>
            {isSmallScreen === true ? (
                <Sheet>
                    <SheetTrigger><i className="bi bi-list icons text-3xl text-white"></i></SheetTrigger>
                    <SheetContent side='top' className="bg-inherit text-white font-semibold">
                        <SheetHeader>
                            <SheetDescription className='text-white text-lg'>About Me</SheetDescription>
                            <SheetDescription className='text-white text-lg'>Projects</SheetDescription>
                            <SheetDescription className='text-white text-lg'>Contact</SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

            ) : (
                <nav className='flex items-center gap-5 text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                    <Link href='#about-me'>
                        About Me
                    </Link>
                    <Link href='#projects'>
                        Projects
                    </Link>
                    <Link href='#contact'>
                        Contact
                    </Link>
                </nav>
            )}
        </header>
    );
}
