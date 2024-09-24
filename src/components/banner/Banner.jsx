import React from 'react';
import { FaFacebookF, FaTiktok } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { BsWhatsapp, BsGithub } from "react-icons/bs";
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  return (
    <section className='pt-[100px] bg-hero-pettern bg-center w-full bg-cover bg-no-repeat bg-fixed h-[500px]'>
      <div className='max-w-Container mx-auto'>
        <div className='text-center'>
          <h4 className='lg:text-[60px] font-pops font-bold text-[#fff] sm:text-[40px]'>
            Hi I'm{' '}
            <TypeAnimation
              sequence={[
                'Web Developer',
                1000,
                'Md Yeamin Ahamed',
                1000,
              ]}
              wrapper="span"
              speed={65}
              deletionSpeed={65}
              className='lg:text-[60px] font-pops font-bold text-[rgb(154,41,73)] hover:text-[red] sm:text-[48px]'
              repeat={Infinity}
            />
          </h4>
        </div>
        <div className=''>
          <p className='lg:text-[18px] font-pops font-semibold pl-[20px] pt-[30px] text-[#fff] text-center sm:text-[16px]'>
            With over 25 years of experience, we have crafted thousands of strategic discovery processes that enable us to understand, connect, represent, and dominate your market.
          </p>
        </div>
        <div className='flex lg:gap-7 lg:pl-[380px] text-[yellow] pt-5 font-pops font-bold text-[28px] sm:gap-5 sm:pl-[260px] md:justify-center md:pr-[230px] md:pt-[40px]'>
          <a className='hover:text-[red]' href="https://www.facebook.com/profile.php?id=100092157622733"><FaFacebookF /></a>
          <a className='hover:text-[red]' href="https://www.tiktok.com/@md.yeamin.ahamed"><FaTiktok /></a>
          <a className='hover:text-[red]' href="https://myaccount.google.com/?hl=en_GB&utm_source=OGB&utm_medium=act&gar=WzEyMF0"><SiGmail /></a>
          <a className='hover:text-[red]' href="https://call.whatsapp.com/video/1OlA10QfuparGvAPobBkh6"><BsWhatsapp /></a>
          <a className='hover:text-[red]' href="https://github.com/yeamin-web-dev"><BsGithub /></a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
