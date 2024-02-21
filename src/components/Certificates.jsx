import Image from "next/image";

export default function Certificates({ url, title, company }) {
    return (
        <div className='w-72 h-auto mt-12 sm:mt-0 sm:w-96 sm:h-80 border border-dark-blue mx-auto flex flex-col bg-black'>
            <Image
                src={url}
                alt="certificate"
                width={288}
                height={300}
                style={{
                    width: '100%',
                    height: 'auto'
                }}
            />
            <p className="w-full h-full flex justify-center items-center font-sm border-dark-blue">
                {
                    company === 'OneBitCode' ? (
                        <span className='text-center text-white font-semibold'>
                            Módulo de <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>{title}</span> - OnebitCode
                        </span>
                    ) : (
                        <span className='text-center text-white font-semibold'>
                            <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>{title}</span> - Alura
                        </span>
                    )
                }

            </p>
        </div >
    )
}