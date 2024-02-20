'use client'

import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { useState } from "react";
import Bolacha from "../components/Bolacha"

export default function ContactSection() {
    const [isOpen, setIsOpen] = useState(false)
    const [toastIsOpen, setToastIsOpen] = useState(false)
    const [toastText, setToastText] = useState('')

    const handleCopyClick = (text) => {
        setIsOpen(true);
        navigator.clipboard.writeText(text);
        setTimeout(() => {
            setIsOpen(false);
            setToastText('Texto copiado para a área de transferência');
            setToastIsOpen(true);
            setTimeout(() => setToastIsOpen(false), 3000);
        }, 1000);
    };

    const handleDownloadClick = () => {
        setToastText('Download iniciado');
        setToastIsOpen(true);
        setTimeout(() => setToastIsOpen(false), 3000);
    };
    return (
        <div className='flex flex-col gap-4'>
            <p className='font-bold text-5xl text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>Sobre Mim</p>
            <section className='flex flex-col items-center gap-4 mt-5 '>
                <div className='flex justify-between items-center gap-2 text-white'>
                    <i className="bi bi-envelope icons text-3xl"></i>
                    <span>lucanequini@gmail.com</span>
                    <button onClick={
                        () => {
                            handleCopyClick('lucanequini@gmail.com')
                        }
                    }

                    ><i className="bi bi-clipboard icons text-3xl"></i></button>
                </div>
                <div className='flex justify-between items-center gap-12 text-white'>
                    <i className="bi bi-telephone icons text-3xl"></i>
                    <span>(11)94394-8562</span>
                    <button onClick={
                        () => {
                            handleCopyClick('lucanequini@gmail.com')
                            setToastIsOpen(true)
                            setTimeout(() => setToastIsOpen(false), 1000 * 3)
                        }
                    }

                    ><i className="bi bi-clipboard icons text-3xl"></i></button>
                </div>
            </section >
            <section className='flex flex-col items-center gap-4'>
                <div className='flex justify-between items-center text-white gap-7'>
                    <i className="bi bi-file-earmark-text icons text-3xl"></i>
                    <span>Download Resume</span>
                    <a href='/curriculo.pdf'
                        download={'curriculo.pdf'}
                        onClick={() => handleDownloadClick()}
                    ><i className="bi bi-download icons text-3xl"></i></a>

                </div>
            </section>
            <Bolacha toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} text={toastText} />
        </div >
    )
}