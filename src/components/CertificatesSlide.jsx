'use client'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Certificates from './Certificates';

const certificates = [
    {
        url: '/html.png',
        title: 'HTML5',
        company: 'OneBitCode'

    },
    {
        url: '/css.png',
        title: 'CSS3',
        company: 'OneBitCode'
    },
    {
        url: '/css-moderno.png',
        title: 'CSS Moderno',
        company: 'OneBitCode'
    },
    {
        url: '/js.png',
        title: 'JavaScript',
        company: 'OneBitCode'
    },
    {
        url: '/ts.png',
        title: 'TypeScript',
        company: 'OneBitCode'
    },
    {
        url: '/sass.png',
        title: 'SASS',
        company: 'OneBitCode'
    },
    {
        url: '/bootstrap.png',
        title: 'Bootstrap',
        company: 'OneBitCode'
    },
    {
        url: '/react.png',
        title: 'React',
        company: 'OneBitCode'
    },
    {
        url: '/git-e-git-hub.png',
        title: 'Git e GitHub',
        company: 'OneBitCode'
    },
    {
        url: '/imersao.png',
        title: 'Imersão Front-End',
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
                arrows: true,
                drag: true,
                breakpoints: {
                    1200: {
                        perPage: 1,
                        width: 600,
                    },
                    600: {
                        perPage: 1,
                        width: 300,
                    },
                    300: {
                        perPage: 1,
                        width: 290,
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