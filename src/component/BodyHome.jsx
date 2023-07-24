import React from 'react'

const Body = () => {
    return (
        <div className='bg-gradient-to-r from-amber-800 via-indigo-950 to-stone-800 flex justify-around w-full  '>
            <article className='flex mt-[100px] justify-between items-center'>
                <section className='mr-[252px] ml-[121px]'>
                    <h2 className='text-xl font-Poppins font-medium  leading-normal tracking-[27.8px]  rotate-[-90deg] text-zinc-500 '>KENT</h2>
                </section>
                <section className='flex flex-col items-center '>
                    <h1 className='text-7xl text-center font-bold tracking-[0.3px] text-white font-Playfair Display mr-[405px]'>I’m Kent Carrero.</h1>
                    <h2 className='text-xl font-semibold leading-normal text-zinc-500 font-Poppins mr-[460px] animate-bounce'>Front End Developer</h2>
                    <img className='mr-[480.5px] opacity-70' src="https://i.imgur.com/CmaQX23.png" alt="fotoPortada" />
                </section>
            </article>
        </div>
    )
}

export default Body