import React from 'react'
import { Link } from 'react-router-dom'


const FooterContacts = () => {

    return (
        <div className='bg-gradient-to-r from-amber-800 via-indigo-950 to-stone-800 flex items-center justify-center'>
            <article className='flex gap-[559px] mb-[20px]'>
                <section className='flex gap-10 '>
                    <Link to={"https://github.com/Kentliel?tab=repositories"}><img className='w-[50px] h-[50px]' src="https://icons.iconarchive.com/icons/bokehlicia/captiva/256/web-github-icon.png" alt="iconGithub" /></Link>
                    <Link to={"https://www.linkedin.com/in/kent-carrero-bba12226a/"}><img className='w-[50px] h-[50px]' src="https://cdn.iconscout.com/icon/free/png-256/free-linkedin-82-434743.png" alt="iconLinkedin" /></Link>
                    <Link to={"https://www.codewars.com/users/Kentliel"}><img className='w-[50px] h-[50px]' src="https://images.crunchbase.com/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1400019742/pbpj9oxf1ipwrisnj9ia.png" alt="iconCodewars" /></Link>
                </section>
                <section className='mb-[00px]'>
                    <p className='font-Poppins text-center text-xl font-medium leading-[36px] tracking-[0.3px] text-[#8C8FA0] '>Created by <span className='font-bold text-white'>Kent</span> | All Reserved!</p>
                </section>
            </article>
        </div>
    )
}

export default FooterContacts