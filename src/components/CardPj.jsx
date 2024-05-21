import Image from 'next/image'

export default function CardPj({ title, urlRp, desc, src, btnContent }) {
    return (
        <div className="flex flex-col justify-around gap-3 p-3" data-aos="zoom-in">
            <Image src={src} alt={'imagem'} width={500} height={250}></Image>
            <p className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{title}</p>
            <p className="font-medium text-white text-justify max-w-lg">{desc}</p>
            <div className='flex align-center gap-3'>
                {urlRp.map((url, i) => (
                    <a key={url} className="" href={url} target="_blank"><button className="bg-transparent text-cyan-400 rounded p-3 border-2 border-cyan-400 duration-200 hover:bg-gradient-to-r from-cyan-400 to-blue-500 hover:text-white">{btnContent[i]}</button></a>
                ))}
            </div>

        </div>
    )
}