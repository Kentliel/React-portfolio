import React from 'react'
import { Link } from 'react-router-dom'

const BodyHireMe = () => {

    return (
        <div className='bg-gradient-to-r from-amber-800 via-indigo-950 to-stone-800 flex flex-col items-center justify-center h-[100vh]'>
            <h1 className='text-center font-Playfair Display text-[50px] font-normal leading-normal text-white mt-[150px] w-[530px] h-[67px]'>Let’s Start by Saying Hi!</h1>
            <Link to={"mailto:kent_carrero@hotmail.com"}><a className='flex gap-2 items-center justify-center font-Poppins text-xl font-medium leading-normal text-white mt-[20px] mb-[200px] border-2 border-white p-[10px] hover:bg-yellow-500 hover:text-black'><img className='w-[20px] h-[20px]' src="https://i.imgur.com/APsZ4Vs.png" alt="correoWhite" />Email me</a></Link>
            
        </div>
    )
}

export default BodyHireMe