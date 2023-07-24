import React from 'react'
import { Link } from 'react-router-dom'

const BodyProyectos = () => {

    return (
        <div className='bg-gradient-to-r from-amber-800 via-indigo-950 to-stone-800 flex flex-col h-[100vh] items-center'>
            <div className='flex gap-[110px] justify-between mb-[60px]'>
                <article className='flex flex-col ml-[128px] justify-around mt-[155px] mb-[157px]'>
                    <h1 className='text-[50px] font-bold leading-[90px] tracking-[0.3px] text-white w-[421px] h-[90px]  mb-[10px]'>My Projects</h1>
                    <p className='text-xl font-medium leading-9 tracking-[0.3px] w-[585px] h-[216px] mb-[40px] text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-yellow-100'>Esto es una pequeña muestra de los proyectos realizados, solo con darle click los llevara al repositorio de github donde veran el codigo!</p>
                    <section className='flex'>
                        <div className='flex flex-col mr-[111px]'>
                            <h2 className='text-start font-Playfair Display text-[50px] font-normal leading-normal text-white w-[105px] h-[67px]'>250+</h2>
                            <p className='text-start font-Poppins text-xl font-bold leading-normal w-[192px] h-[30px] text-white'>Project Completed</p>
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='text-start font-Playfair Display text-[50px] font-normal leading-normal text-white w-[105px] h-[67px]'>249+</h2>
                            <p className='text-start font-Poppins text-xl font-bold leading-normal w-[192px] h-[30px] text-white'>Happy Clients</p>
                        </div>
                    </section>
                </article>
                <article className='flex flex-col mr-[121px] mt-[97px] gap-[20px] mb-[100px]'>
                    <section className='flex gap-2 w-[490px] h-[176px] rounded-[25px] justify-center items-center bg-[#8C8FA0] hover:bg-[#E9EDF0]'>
                        <Link to={"https://github.com/Kentliel/React-Caf-de-Altura"}><img className='w-[90px] h-[90px] rounded overflow-scroll' src="https://i.imgur.com/5Uyp9I7.png" alt="cafeDeAltura" /></Link>
                        <Link to={"https://github.com/Kentliel/React-Caf-de-Altura"}><div className='flex flex-col justify-center'>
                            <h3 className='font-Playfair Display text-3xl font-bold leading-normal tracking-[0.3px]'>High Altitude Coffee</h3>
                            <p className='font-Poppins text-xl font-medium leading-normal tracking-[0.3px]'>React</p>
                        </div></Link>
                    </section>
                    <section className='flex gap-2 w-[490px] h-[176px] rounded-[25px] justify-center items-center bg-[#8C8FA0] hover:bg-[#E9EDF0]'>
                        <Link to={"https://github.com/Kentliel/React-Countries"}><img className='w-[90px] h-[90px] rounded overflow-scroll' src="https://i.imgur.com/bHJgnjW.png" alt="laptopGreen" /></Link>
                        <Link to={"https://github.com/Kentliel/React-Countries"}><div className='flex flex-col justify-center'>
                            <h3 className='font-Playfair Display text-3xl font-bold leading-normal tracking-[0.3px]'>Countries Wiki</h3>
                            <p className='font-Poppins text-xl font-medium leading-normal tracking-[0.3px]'>React</p>
                        </div></Link>
                    </section>
                    <section className='flex gap-2 w-[490px] h-[176px] rounded-[25px] justify-center items-center bg-[#8C8FA0] hover:bg-[#E9EDF0]'>
                        <Link to={"https://github.com/Kentliel/React-Context-Exercise2"}><img className='w-[90px] h-[90px] rounded overflow-scroll' src="https://i.imgur.com/rY5TlIg.png" alt="personasOrange" /></Link>
                        <Link to={"https://github.com/Kentliel/React-Context-Exercise2"}><div className='flex flex-col justify-center'>
                            <h3 className='font-Playfair Display text-3xl font-bold leading-normal tracking-[0.3px]'>Pokemon App</h3>
                            <p className='font-Poppins text-xl font-medium leading-normal tracking-[0.3px]'>React</p>
                        </div></Link>
                    </section>
                </article>
            </div>
            <div className='w-[1197px] h-[2px] bg-stone-500 mb-[20px] ml-[122px] mr-[121px]'></div>
        </div>
    )
}

export default BodyProyectos