export default function ItemContact({ svg, title, subtitle, svg2, action }) {
    return (
        <section>
            <div className='flex flex-col justify-between items-center gap-5 text-white'>
                <div className='flex flex-col gap-3 text-center'>
                    <i className={`${svg} text-5xl`}></i>
                    <p className='text-3xl font-bold'>{title}</p>
                </div>
                <span className='mb-5'>{subtitle}</span>
                <button onClick={action}

                ><i className={`${svg2} text-3xl hover:text-cyan-400`}></i></button>
            </div>
        </section>
    )
}