export default function ItemContact({ svg, title, subtitle, svg2, action }) {
    return (
        <div className='flex flex-col items-center gap-5 text-white mb-20'>
            <i className={`${svg} text-5xl`}></i>
            <p className='text-3xl font-bold'>{title}</p>
            <span className='mb-5'>{subtitle}</span>
            <button onClick={action}
            ><i className={`${svg2} text-3xl hover:text-cyan-400`}></i></button>
        </div>
    )
}