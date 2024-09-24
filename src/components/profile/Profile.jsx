import React from 'react'
import last from "../../assets/last.jpg"
import { FaFacebookF } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
const Profile = () => {
  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    centerPadding: "20px",
  };
  return (
    <div>
        <Slider {...settings}>
      <section className=' mt-[70px] pt-[30px] bg-profile bg-center w-full bg-cover bg-no-repeat bg-fixed h-[550px]'>
        <div className=''>
            <div className='text-center'>
                <img className='h-[200px] w-[200px] rounded-[50%] lg:ml-[570px] sm:ml-[260px]' src={last} alt="" />
                <h2 className='text-center lg:text-[40px] sm:text-[30px] font-pops font-bold text-[yellow] hover:text-[red] pt-3'>Md Yeamin Ahamed</h2>
                <h3 className='text-center lg:text-[30px] sm:text-[26px] font-pops font-bold text-[#00ff22] hover:text-[#00ff22] pt-1'>Web devoloper</h3>
                <p className='text-center lg:text-[18px] sm:text-[14px] lg:font-pops sm:font-semibold font-semibold text-[#fff] hover:text-[#00ff22] pt-3'>Dolor facilis veritatis doloremque dicta eos Voluptate earum nulla ad et esse Saepe asperiores nisi facere ipsam corporis. Dolorem praesentium tenetur tempore dolorem illum autem? Veritatis fuga quasi sunt tenetur. Expedita id eaque incidunt beatae nesciunt! In similique exercitationem tempore excepturi placeat Nostrum ducimus dicta temporibus quas!</p>
                <div className='flex lg:gap-7 sm:gap-5 lg:pl-[570px] sm:pl-[260px] text-[yellow] pt-5 font-pops font-bold text-[28px]  md:ml-[60px]'>
               <a className='hover:text-[red]' href="https://www.facebook.com/profile.php?id=100092157622733">< FaFacebookF/></a>
               <a className='hover:text-[red]' href="https://www.tiktok.com/@md.yeamin.ahamed"> <FaTiktok/></a>
               <a className='hover:text-[red]' href="https://myaccount.google.com/?hl=en_GB&utm_source=OGB&utm_medium=act&gar=WzEyMF0"> <SiGmail/></a>
               <a className='hover:text-[red]' href="https://call.whatsapp.com/video/1OlA10QfuparGvAPobBkh6"> <BsWhatsapp/></a>
               <a className='hover:text-[red]' href="https://github.com/yeamin-web-dev"> <BsGithub/></a>
                </div>
            </div>
        </div>
      </section>
      <section className=' mt-[70px] pt-[30px] bg-profile bg-center w-full bg-cover bg-no-repeat bg-fixed h-[550px]'>
        <div className=''>
            <div className='text-center'>
                <img className='h-[200px] w-[200px] rounded-[50%] lg:ml-[570px] sm:ml-[260px]' src={last} alt="" />
                <h2 className='text-center lg:text-[40px] sm:text-[30px] font-pops font-bold text-[yellow] hover:text-[red] pt-3'>Md Yeamin Ahamed</h2>
                <h3 className='text-center lg:text-[30px] sm:text-[26px] font-pops font-bold text-[#00ff22] hover:text-[#00ff22] pt-1'>Web devoloper</h3>
                <p className='text-center lg:font-pops sm:font-semibold font-semibold text-[#fff] hover:text-[#00ff22] pt-3'>Dolor facilis veritatis doloremque dicta eos Voluptate earum nulla ad et esse Saepe asperiores nisi facere ipsam corporis. Dolorem praesentium tenetur tempore dolorem illum autem? Veritatis fuga quasi sunt tenetur. Expedita id eaque incidunt beatae nesciunt! In similique exercitationem tempore excepturi placeat Nostrum ducimus dicta temporibus quas!</p>
                <div className='flex  lg:gap-7 sm:gap-5 lg:pl-[570px] sm:pl-[260px] text-[yellow] pt-5 font-pops font-bold text-[28px] md:ml-[60px]'>
               <a className='hover:text-[red]' href="https://www.facebook.com/profile.php?id=100092157622733">< FaFacebookF/></a>
               <a className='hover:text-[red]' href="https://www.tiktok.com/@md.yeamin.ahamed"> <FaTiktok/></a>
               <a className='hover:text-[red]' href="https://myaccount.google.com/?hl=en_GB&utm_source=OGB&utm_medium=act&gar=WzEyMF0"> <SiGmail/></a>
               <a className='hover:text-[red]' href="https://call.whatsapp.com/video/1OlA10QfuparGvAPobBkh6"> <BsWhatsapp/></a>
               <a className='hover:text-[red]' href="https://github.com/yeamin-web-dev"> <BsGithub/></a>
                </div>
            </div>
             <div className=''></div>
        </div>
      </section>
      </Slider>
    </div>
  )
}

export default Profile
