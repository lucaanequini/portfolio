'use client'

import CardPj from './CardPj'
import { useState } from 'react';

export default function CardArea() {
    const projects = [
        {
            id: 1,
            title: 'Spotify Clone',
            src: '/spotify.png',
            url: ['https://github.com/lucaanequini/react-spotify'],
            description: "O Spotify Clone (Front-End) é uma recriação do front-end da página inicial do Spotify, desenvolvido originalmente durante a imersão front-end do Alura.",
            btnContent: ['Ver no GitHub']
        },
        {
            id: 2,
            title: 'Gestor de Estoque',
            src: '/stock-manager.png',
            url: ['https://github.com/lucaanequini/stock-manager'],
            description: 'Simulador de gestor de estoque desenvolido com ReactJS, dentre suas funcionalidades temos: Adicionar, Remover e Editar produto, vizualizar detalhes de um produto e vizualições perante a data de cadastro do produto.',
            btnContent: ['Ver no GitHub']
        },
        {
            id: 3,
            title: 'OneBitX',
            src: '/falcon.png',
            url: ['https://github.com/lucaanequini/OneBitX'],
            description: 'Clone da página da SpaceX desenvolvida com HTML e SASS.',
            btnContent: ['Ver no GitHub']
        },
        {
            id: 4,
            title: 'Weather APP',
            src: '/weather-app.png',
            url: ['https://github.com/lucaanequini/weather-project'],
            description: 'Aplicação Clima-Tempo desenvolvida com NextJS, ReactJS e Tailwind CSS, utilizando a API REST "openweathermap" e o armazenamento do navegador.Pesquisar o clima de certa cidade, favoritar e desfavoritar cidades, assim como atualizar os dados das cidades favoritadas são algumas das funcionalidades.',
            btnContent: ['Ver no GitHub']
        },
        {
            id: 5,
            title: 'TO DO List',
            src: '/to-do-list.png',
            url: ['https://github.com/lucaanequini/to-do-list'],
            description: 'Aplicação de Lista de Afazeres desenvolvida com EJS, JS e banco de dados NoSQL (MongoDB). Adicionar, remover e editar listas de tarefas, adicionar, remover e marcar tarefas como conluídas são algumas das funcionalidades.',
            btnContent: ['Ver no GitHub']
        },
        {
            id: 6,
            title: 'OneBitFlix',
            src: '/onebitflix.png',
            url: ['https://github.com/lucaanequini/onebitflix-frontend', 'https://github.com/lucaanequini/onebitflix-backend'],
            description: 'Projeto final do curso FullStack JS, consiste em uma aplicação fazendo uma releitura da plataforma de cursos da OneBitCode, onde é possível se cadastrar, logar, assistir episódios dos cursos, favoritar, entre outras funcionalidades. Foi desenvolvido com TypeScript, React, NodeJS, NextJS e PostgreSQL.',
            btnContent: ['Ver no GitHub (Front-End)', 'Ver no GitHub (Back-End)']
        },
        {
            id: 7,
            title: 'Jotion',
            src: '/jotion.png',
            url: ['https://github.com/lucaanequini/notion-clone', 'https://note-taking-app-woad-eight.vercel.app/'],
            description: 'Clone do Notion, com todas as funcionalidades! Desenvolvido com TypeScript, Tailwind CSS, Convex e Clerk Authentication.',
            btnContent: ['Ver no GitHub', 'Acessar']
        }
    ]

    const [showIndex, setShowIndex] = useState(3);

    const handleShowMore = () => {
        setShowIndex(showIndex + 3);
    };

    return (
        <>
            <p className='font-bold text-5xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-10'>Projetos</p>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {projects.slice(0, showIndex).map((project) => (
                        <CardPj
                            title={project.title}
                            desc={project.description}
                            urlRp={project.url}
                            src={project.src}
                            key={project.id}
                            btnContent={project.btnContent}
                        />
                    ))}
                </div>
            </div>
            {showIndex < projects.length && (
                <button className="mt-5 border-2 rounded py-3 px-5 hover:bg-transparent hover:border-cyan-400 hover:duration-200 hover:bg-gradient-to-r from-cyan-400 to-blue-500 text-white" onClick={handleShowMore}>
                    Ver Mais
                </button>
            )}
        </>
    )
}