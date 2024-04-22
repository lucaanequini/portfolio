export default function HelloContent() {
    return (
        <div className='flex flex-col gap-5 w-screen px-2 md:px-20'>
            <p className='font-bold text-4xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-16 md:text-5xl'>Olá, sou</p>
            <p className='font-bold text-4xl text-white md:text-5xl'>Luca Anequini Antoniazzi</p>
            <p className='text-gray-200 max-w-4xl text-justify'>Software Developer | JS, TS, React, NodeJS, SQL | Computer Science Student</p>
        </div>
    )
}