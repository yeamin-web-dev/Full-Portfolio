import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
const Contact = () => {
  return (
    <section className=' mt-[100px]  bg-[#222]'>
        <div className='max-w-Container mx-auto h-[700px] pt-[100px] flex'>
          <div className=''>
            <div className='w-[30%]'>
              <h4 className='lg:text-[28px] sm:text-[20px] text-[yellow] font-pops font-bold  pl-[10px]' >Contact</h4>
              <h2 className='lg:text-[60px] sm:text-[40px] text-[#fff] font-pops font-bold  pl-[10px]'>Let’s connect</h2>
            </div>
            <div className='reletive'>
            <div className='pt-[20px]'>
              <p className='lg:text-[16px] sm:text-[14px] font-pops lg:font-bold sm:font-semibold text-[#fff]  pl-[40px] pt-[5px] absolute'>Email us</p>
              <h3 className='lg:text-[26px] sm:text-[20px] font-pops lg:font-bold sm:font-semibold text-[#fff] pt-[20px]  pl-[40px] absolute'>yeamin@gmail.com</h3>
              <a className='lg:text-[26px] sm:text-[20px] font-pops lg:font-bold sm:font-semibold text-[#fff]  absolute pt-[20px] sm:pl-[7px] lg:pl-0' href=""><MdOutlineMail /></a>
            </div>
            <div className='pt-[20px]'>
              <p className='lg:text-[16px] sm:text-[14px] font-pops lg:font-bold sm:font-semibold text-[#fff] pt-[80px] pl-[40px] absolute'>Call us</p>
              <h3 className='lg:text-[26px] sm:text-[20px] font-pops lg:font-bold sm:font-semibold text-[#fff]  pl-[40px] pt-[100px] absolute'>01987251131</h3>
              <a className='lg:text-[26px] sm:text-[20px] font-pops lg:font-bold sm:font-semibold text-[#fff] absolute pt-[90px] sm:pl-[7px] lg:pl-0 ' href=""><IoCall /></a>
            </div>
            <div className='pt-[20px]'>
              <p className='lg:text-[16px] sm:text-[14px] font-pops lg:font-bold sm:font-semibold text-[#fff] pl-[40px] pt-[150px] absolute'>Office address</p>
              <h3 className='lg:text-[26px] sm:text-[20px] font-pops lg:font-bold sm:font-semibold text-[#fff] pl-[40px] pt-[170px] absolute'>uttora dhaka</h3>
              <a className='lg:text-[26px] sm:text-[20px] font-pops lg:font-bold sm:font-semibold text-[#fff] pt-[160px] absolute sm:pl-[7px] lg:pl-0' href=""><SlLocationPin /></a>
            </div>
            </div>
            </div>
            <div className=''>
            <div className='w-[70%] text-end '>
              <div className='flex lg:gap-12 sm:gap-3'>
              <div className='lg:ml-[300px] sm:ml-[130px]'>
              <h2 className='lg:pr-[330px] sm:pr-[240px] lg:text-[20px] sm:text-[16px] font-pops font-semibold text-[#fff]'>Name</h2>
              <input className='lg:h-[50px] lg:w-[300px] sm:h-[40px] sm:w-[200px] sm:mr-[87px] pl-[15px]  text-[16px] font-semibold bg-[#222] border-1 border mt-[10px] rounded-md text-[#fff]' type="text" placeholder='Your Name :' />
              </div>
              <div className='sm:absolute sm:ml-[340px] lg:absolute lg:ml-[640px]'>
              <h4 className='lg:pr-[330px] lg:text-[20px] sm:text-[16px] font-pops font-semibold text-[#fff] sm:pr-[250px]'>Email</h4>
              <input className='lg:h-[50px] lg:w-[300px] sm:h-[40px] sm:w-[200px] sm:mr-[87px] text-[16px] font-semibold bg-[#222] border-1 border pl-[15px] mt-[10px] rounded-md text-[#fff]' type="text" placeholder='Your Email :' />
              </div>
              </div>
              <div className='flex lg:gap-12 sm:gap-3'>
              <div className='lg:ml-[300px] sm:ml-[130px] pt-[30px]'>
              <h2 className='lg:pr-[330px] sm:pr-[240px] lg:text-[20px] sm:text-[16px] font-pops font-semibold text-[#fff]'>Phone</h2>
              <input className='lg:h-[50px] lg:w-[300px] sm:h-[40px] sm:w-[200px] sm:mr-[87px] pl-[15px]  text-[16px] font-semibold bg-[#222] border-1 border mt-[10px] rounded-md text-[#fff]' type="text" placeholder='Your Phone :' />
              </div>
              <div className='pt-[30px] sm:absolute sm:ml-[330px] lg:absolute lg:ml-[650px]'>
              <h4 className='lg:pr-[310px] lg:text-[20px] sm:text-[16px] font-pops font-semibold text-[#fff] sm:pr-[245px]'>Subject</h4>
              <input className='lg:h-[50px] lg:w-[300px] sm:h-[40px] sm:w-[200px] sm:mr-[87px] text-[16px] font-semibold bg-[#222] border-1 border pl-[15px] mt-[10px] rounded-md text-[#fff]' type="text" placeholder='Your Subject :' />
              </div>
              </div>
              <div className='lg:pt-[30px] sm:pt-[10px] lg:ml-[300px] sm:ml-[130px]'>
              <h4 className='lg:pr-[300px] sm:pr-[400px] lg:text-[20px] sm:text-[16px] font-pops font-semibold text-[#fff]'>Message</h4>
              <input className='lg:h-[100px] lg:w-[660px] sm:h-[60px] sm:w-[360px] text-[16px] font-semibold bg-[#222] border-1 border pl-[15px] mt-[10px] rounded-md text-[#fff] sm:mr-[34px]' type="text" placeholder='Type Your Message :' />
              </div>
            </div>
              <button className='text-[#fff] border-1 border py-3 px-5 mt-[30px] lg:ml-[300px] sm:ml-[130px] rounded-md'>Submit</button>
              <div className='flex'>
                <div className='lg:ml-[300px] sm:ml-[130px] pt-[20px]'>
                  <h2 className='text-[#fff] lg:text-[24px] sm:text-[20px] font-pops font-bold'>Follow Me :</h2>
                </div>
                <div>
                <div className='flex lg:gap-7 sm:gap-5  pl-[20px] text-[yellow] pt-5 font-pops font-bold text-[28px]'>
               <a className='hover:text-[red]' href="https://www.facebook.com/profile.php?id=100092157622733">< FaFacebookF/></a>
               <a className='hover:text-[red]' href="https://www.tiktok.com/@md.yeamin.ahamed"> <FaTiktok/></a>
               <a className='hover:text-[red]' href="https://myaccount.google.com/?hl=en_GB&utm_source=OGB&utm_medium=act&gar=WzEyMF0"> <SiGmail/></a>
               <a className='hover:text-[red]' href="https://call.whatsapp.com/video/1OlA10QfuparGvAPobBkh6"> <BsWhatsapp/></a>
               <a className='hover:text-[red]' href="https://github.com/yeamin-web-dev"> <BsGithub/></a>
                </div>
                </div>
              </div>
              </div>
        </div>
    </section>
  )
}

export default Contact
