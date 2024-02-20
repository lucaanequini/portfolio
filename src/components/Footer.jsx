export default function Footer() {

    return (
        <>
            <hr />
            <footer className="flex flex-col justify-center text-center mt-12 text-neutral-500">
                <div className="flex gap-3 justify-center">
                    <a className="text-4xl" href="https://github.com/lucaanequini" target="_blank" rel="noopener noreferrer" >
                        <i
                            className="bi bi-github duration-200 hover:text-cyan-400">

                        </i>
                    </a>
                    <a className="text-4xl" href="https://github.com/lucaanequini" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin duration-200 hover:text-cyan-400"></i>
                    </a>
                </div>
                <span className="font-bold">Desenvolvido com ReactJS, Tailwind e NextJS</span>
                <span className="font-bold">Luca Anequini Antoniazzi ©2023</span>

            </footer>
        </>
    )
}