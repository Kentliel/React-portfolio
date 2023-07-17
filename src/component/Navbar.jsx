import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='bg-gradient-to-r from-amber-800 via-indigo-950 to-stone-800 text-white flex justify-around items-center p-[10px] '>
      <Link to="/K" className='font-Poppins mr-[613px] ml-[121px] flex items-center'><img className='w-[150px]' src='https://i.imgur.com/pJuDauk.png' alt='circuloLetra' />KENT</Link>
      <Link to="/" className='font-Poppins mr-10'>Home</Link>
      <Link to="/About" className='font-Poppins mr-10'>About</Link>
      <Link to="/Services" className='font-Poppins mr-[70px]'>Services</Link>
      <Link to="/HireMe" className='font-Poppins mr-[143px] border-2 border-white p-[10px]'>Hire Me</Link>
    </div>
  )
}

export default Navbar