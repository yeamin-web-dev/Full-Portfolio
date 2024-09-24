import React from 'react'
import some from '../../assets/code.png'
const Some = () => {
  return (
    <section className='pt-[70px]'>
        <div className='max-w-Container mx-auto'>
            <div className='flex w-1/3'>
                <h2 className='lg:text-[48px] font-pops font-bold sm:text-[36px] md:pl-[30px] lg:pl-[0]'>Some of our finest
                work.</h2>
            </div>
            <div className=''>
                <ul className='flex gap-7 pt-7 md:pl-[30px] lg:pl-[0]'>
                    <li className='font-pops text-[16px] font-semibold hover:text-[red]'>All work</li>
                    <li className='font-pops text-[16px] font-semibold hover:text-[red]'>Digital service</li>
                    <li className='font-pops text-[16px] font-semibold hover:text-[red]'>Content Writting</li>
                    <li className='font-pops text-[16px] font-semibold hover:text-[red]'>Marketing</li>
                </ul>
            </div>
             
        </div>
    </section>
  )
}

export default Some
