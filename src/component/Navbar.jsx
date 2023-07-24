import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='bg-gradient-to-r from-amber-800 via-indigo-950 to-stone-800 text-white flex justify-around items-center p-[10px] '>
      <Link to="/" className='font-Poppins mr-[613px] ml-[121px] flex items-center'><img className='w-[150px]' src='https://i.imgur.com/pJuDauk.png' alt='circuloLetra' />Kent</Link>
      <Link to="/" className='font-Poppins mr-10 p-2 hover:rounded hover:bg-zinc-700'>Home</Link>
      <Link to="/About" className='font-Poppins mr-10 p-2 hover:rounded hover:bg-zinc-700'>About</Link>
      <Link to="/Proyectos" className='font-Poppins mr-[70px] p-2 hover:rounded hover:bg-zinc-700'>Projects</Link>
      <Link to="/HireMe" className='font-Poppins mr-[143px] border-2 border-white p-[10px] hover:bg-orange-50 hover:text-amber-500 hover:rounded'>Hire Me</Link>
    </div>
  )
}

export default Navbar