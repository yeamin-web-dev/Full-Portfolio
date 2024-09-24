import React from 'react'
import logo from '../../assets/logo.png'
const Header = () => {
  return (
    <section className='bg-slate-300'>
        <div className='max-w-Container mx-auto flex'>
            <div className='w-[20%]'>
              <img className='lg:h-[100%] lg:w-[60%] sm:h-[70%] sm:w-[80%] md:h-[70%] md:w-[80%] sm:pl-[25px]' src={logo} alt="" />
            </div>
            <div className='w-[60%]'>
              <ul className='flex lg:gap-10 justify-center py-8 sm:gap-6 '>
                <li className='font-pops text-[16px] font-semibold hover:text-[red]'>Home</li>
                <li className='font-pops text-[16px] font-semibold hover:text-[red]'>About</li>
                <li className='font-pops text-[16px] font-semibold hover:text-[red]'>Services</li>
                <li className='font-pops text-[16px] font-semibold hover:text-[red]'>works</li>
                <li className='font-pops text-[16px] font-semibold hover:text-[red]'>Blog</li>
               
              </ul>
            </div>
            <div className='w-[20%]'>
              <ul className='py-7 text-end sm:pr-5 lg:pr-0'>
              <li className='font-pops text-[16px] font-semibold border border-[1px]. rounded-full border-[red] text-[red] inline-block p-2 hover:text-[black] mr-20px hover:bg-[red]'>Contact us</li>
              </ul>
            </div>
        </div>
    </section>
  )
}

export default Header