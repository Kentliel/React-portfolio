import React from 'react'
import { Link } from 'react-router-dom'

const FooterTecnolog = () => {

  return (
    <div className='bg-black w-full h-[120px] flex justify-around pt-[20px] pb-[20px]' >
        <Link to={"https://www.mongodb.com/"} target='_blank' className='DmSerif text-[#808080] flex font-bold items-center text-3xl hover:animate-pulse'><img className='h-[80px] w-[160px]' src="https://i.imgur.com/CQffq0c.png" alt="logoMongoDB" /></Link>
        <Link to={"https://es.react.dev/"} target='_blank' className='DmSerif text-[#808080] flex gap-4 font-bold items-center text-3xl hover:animate-pulse'><img className='h-[80px] w-[90px]' src="https://i.imgur.com/VULYbBq.png" alt="logoReact" /></Link>
        <Link to={"https://nodejs.org/es"} target='_blank' className='DmSerif text-[#808080] flex font-bold items-center text-3xl hover:animate-pulse'><img className='h-[80px] w-[240px] ml-[-35px]' src="https://i.imgur.com/oRUZNGw.png" alt="logoNodejs" /></Link>
        <Link to={"https://expressjs.com/"} target='_blank' className='DmSerif text-[#808080] flex gap-4 font-bold items-center text-3xl hover:animate-pulse'><img className='h-[80px] w-[80px]' src="https://i.imgur.com/aM5C1Ip.png" alt="logoExpressJS" /></Link>
        <Link to={"https://tailwindcss.com/"} target='_blank' className='DmSerif text-[#808080] flex gap-4 font-bold items-center text-3xl hover:animate-pulse'><img className='h-[80px] w-[100px]' src="https://i.imgur.com/9J4StGD.png" alt="logoTailwind" /></Link>
        
    </div>
  )
}

export default FooterTecnolog