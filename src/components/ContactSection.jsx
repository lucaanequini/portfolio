'use client'

import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { useState } from "react";
import Bolacha from "../components/Bolacha"
import ItemContact from './ItemContact';

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

    const handleEmailButtonClick = () => {
        window.open('mailto:lucanequini@gmail.com');
    };
    return (
        <div className='flex flex-col gap-4'>
            <p className='font-bold text-5xl text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>Contato</p>
            <section className='flex flex-col gap-20 mt-10 sm:flex-row lg:gap-40 xl:gap-60'>
                <ItemContact
                    svg='bi bi-envelope'
                    title='Email'
                    subtitle='lucanequini@gmail.com'
                    svg2='bi bi-send-plus'
                    action={() => { handleEmailButtonClick() }} />
                <ItemContact
                    svg='bi bi-telephone'
                    title='Telefone'
                    subtitle='(11) 94294-8562'
                    svg2='bi bi-clipboard'
                    action={() => { handleCopyClick() }} />
                <div className='flex flex-col justify-between items-center text-white gap-7'>
                    <div className='flex flex-col gap-3 text-center'>
                        <i className="bi bi-file-earmark-text text-5xl"></i>
                        <p className='text-3xl font-bold'>Currículo</p>
                    </div>
                    <span>Download Resume</span>
                    <a href='/curriculo.pdf'
                        download={'curriculo.pdf'}
                        onClick={() => handleDownloadClick()}
                    ><i className="bi bi-download text-3xl hover:text-cyan-400"></i></a>

                </div>
            </section >
            <section className='flex flex-col items-center gap-4'>

            </section>

            <Bolacha toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} text={toastText} />
        </div >
    )
}