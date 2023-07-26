import React from 'react'
import { Link } from 'react-router-dom'

const BodyAbout = () => {

    return (
        <div className='bg-gradient-to-r from-amber-800 via-indigo-950 to-stone-800 flex flex-col h-[100vh] items-center'>
            <div className='flex justify-center  '>
                <div className=''>
                    <Link to={"https://www.canva.com/design/DAFnA4FxvaI/59gbUAupHz4SNd8kpz3F0Q/edit?utm_content=DAFnA4FxvaI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"} target='_blank'><img className='w-[493px] h-[338px] mt-[98px] ml-[118px] mr-[117px] mb-[21px] rounded-md transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg' src="https://i.imgur.com/fmnnVEW.png" alt="FotoAbout" /></Link>
                    <Link target='_blank' rel='noreferrer' to={"https://export-download.canva.com/FxvaI/DAFnA4FxvaI/65/0-1000196845471726439.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20230725%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230725T141448Z&X-Amz-Expires=80230&X-Amz-Signature=680a49ef64d2829a569a55c6e33ce444f93d022024a9300eed1d1bdc5b7f2b12&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Gray%2520Black%2520Modern%2520Professional%2520CV%2520Resume.pdf&response-expires=Wed%2C%2026%20Jul%202023%2012%3A31%3A58%20GMT"} className='flex justify-center text-white p-1 ml-72 mr-72 rounded-lg bg-green-900 ransition duration-300 ease-in-out hover:scale-110 hover:shadow-lg font-bold text-lg hover:text-yellow-300'>Download CV</Link>
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <h1 className='font- Playfair-Display text-[50px] text-white font-bold leading-[90px] tracking-[0.3px] w-[547px] mt-[207px] mr-[165px] '>FRONT END DEVELOPER IN SPAIN</h1>
                    <p className='font-Poppins text-xl font-medium leading-9 tracking-[0.3px] w-[445px] h-[315px] text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-yellow-100 mr-[267px] mb-[107px] text-justify'>Mis intereses y pasiones abarcan el campo de la programación, el desarrollo web, el análisis de datos, la ciberseguridad, las finanzas y la gestión de empresas. Siempre me mantengo actualizado/a en las últimas tendencias y avances en estas áreas a través de la participación en cursos, conferencias y la lectura de recursos especializados.</p>

                </div>
            </div>
            <div className='w-[1197px] h-[2px] bg-stone-500 mb-[20px] ml-[122px] mr-[121px] '></div>
        </div>
    )
}

export default BodyAbout