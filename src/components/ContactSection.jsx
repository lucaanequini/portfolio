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
        <div className='flex flex-col items-center gap-10'>
            <p className='font-bold text-5xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>Contato</p>
            <div className='columns-1  gap-20 sm:columns-3 lg:gap-40 xl:gap-60'>
                <ItemContact
                    svg='bi bi-telephone'
                    title='Telefone'
                    subtitle='(11) 94294-8562'
                    svg2='bi bi-clipboard'
                    action={() => { handleCopyClick() }} />
                <ItemContact
                    svg='bi bi-envelope'
                    title='E-mail'
                    subtitle='lucanequini@gmail.com'
                    svg2='bi bi-send-plus'
                    action={() => { handleEmailButtonClick() }} />
                <div className='flex flex-col items-center text-white gap-5'>
                    <i className="bi bi-file-earmark-text text-5xl"></i>
                    <p className='text-3xl font-bold'>Currículo</p>
                    <span className='mb-5'>Download Resume</span>
                    <a href='/curriculo.pdf'
                        download={'curriculo.pdf'}
                        onClick={() => handleDownloadClick()}
                    ><i className="bi bi-download text-3xl hover:text-cyan-400"></i></a>
                </div>
            </div>
            <Bolacha toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} text={toastText} />
        </div >
    )
}