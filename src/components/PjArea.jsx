import CardPj from './CardPj'

export default function CardArea() {
    const projects = [
        {
            id: 1,
            title: 'Spotify Clone',
            src: '/spotify.png',
            url: 'https://github.com/lucaanequini/react-spotify',
            description: "O Spotify Clone (Front-End) é uma recriação do front-end da página inicial do Spotify, desenvolvido originalmente durante a imersão front-end do Alura."
        },
        {
            id: 2,
            title: 'Gestor de Estoque',
            src: '/stock-manager.png',
            url: 'https://github.com/lucaanequini/stock-manager',
            description: 'Simulador de gestor de estoque desenvolido com ReactJS, dentre suas funcionalidades temos: Adicionar, Remover e Editar produto, vizualizar detalhes de um produto e vizualições perante a data de cadastro do produto.'
        },
        {
            id: 3,
            title: 'OneBitX',
            src: '/falcon.png',
            url: 'https://github.com/lucaanequini/OneBitX',
            description: 'Clone da página da SpaceX desenvolvida com HTML e SASS.'
        },
        {
            id: 4,
            title: 'Weather APP',
            src: '/weather-app.png',
            url: 'https://github.com/lucaanequini/weather-project',
            description: 'Aplicação Clima-Tempo desenvolvida com NextJS, ReactJS e Tailwind CSS, utilizando a API REST "openweathermap" e o armazenamento do navegador.Pesquisar o clima de certa cidade, favoritar e desfavoritar cidades, assim como atualizar os dados das cidades favoritadas são algumas das funcionalidades.'
        },
        {
            id: 5,
            title: 'TO DO List',
            src: '/to-do-list.png',
            url: 'https://github.com/lucaanequini/to-do-list',
            description: 'Aplicação de Lista de Afazeres desenvolvida com EJS, JS e banco de dados NoSQL (MongoDB). Adicionar, remover e editar listas de tarefas, adicionar, remover e marcar tarefas como conluídas são algumas das funcionalidades.'
        },


    ]
    return (
        <>
            <p className='font-bold text-5xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-10'>Projetos</p>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        projects.map((project) => (
                            <CardPj title={project.title} desc={project.description} urlRp={project.url} src={project.src} key={project.id}></CardPj>
                        ))
                    }
                </div>
            </div>
        </>



    )
}