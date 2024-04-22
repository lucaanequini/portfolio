'use client'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Certificates from './Certificates';

const certificates = [
    {
        url: '/fullstackJs.png',
        title: 'FullStack JavaScript',
        company: 'OneBitCode'
    },
    {
        url: '/imersaoFront.png',
        title: 'Imersão Front-End',
        company: 'Alura'
    },
    {
        url: '/imersaoPython.png',
        title: 'Imersão Python: do Excel a Análise de Dados',
        company: 'Alura'
    }
]

export default function CertificatesSlide() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <p className='font-bold text-5xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-5'>Certificados</p>
            <Splide options={{
                type: 'loop',
                perPage: 3,
                perMove: 1,
                width: 1200,
                pagination: false,
                arrows: false,
                drag: false,
                autoplay: false,
                breakpoints: {
                    1200: {
                        perPage: 1,
                        width: 600,
                        arrows: true,
                        drag: true
                    },
                    600: {
                        perPage: 1,
                        width: 300,
                        arrows: true,
                        drag: true
                    },
                    300: {
                        perPage: 1,
                        width: 290,
                        arrows: true,
                        drag: true
                    }
                }
            }}>
                {certificates.map((certificate, index) => (
                    <SplideSlide key={index}>
                        <Certificates url={certificate.url} title={certificate.title} company={certificate.company} />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    )
}