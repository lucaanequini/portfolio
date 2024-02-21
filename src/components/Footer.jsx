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
                <span className="font-bold mt-5">Luca Anequini Antoniazzi © 2024</span>
                <span className="font-bold mb-5">Todos os direitos reservados</span>

            </footer>
        </>
    )
}