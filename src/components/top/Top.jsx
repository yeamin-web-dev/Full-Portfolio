import React from 'react';
import messi from '../../assets/silider.jpg';
import silider from '../../assets/silider1.jpg';
import pash from '../../assets/silider2.jpg';
import messi3 from '../../assets/silider3.jpg';
import messi4 from '../../assets/silider4.jpg';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

function SampleNextArrow(props) {
  const {onClick } = props;
  return (
    <div onClick={onClick} className='h-[50px] w-[50px] bg-[yellow] rounded-[50%] absolute lg:top-[33%] sm:top-[19%] md:top-[140px] transform -translate-x-[50%] -translate-y-[50%] z-10 flex items-center justify-center left-[95%]' >
      <GrLinkNext/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const {onClick } = props;
  return (
    <div
  onClick={onClick}
  className='h-[50px] w-[50px] bg-[yellow] rounded-[50%] absolute left-[5%] lg:top-[33%] sm:top-[19%] transform -translate-x-[50%] -translate-y-[50%] z-10 flex items-center justify-center md:top-[140px]'>
  <GrLinkPrevious />
</div>
  );
}

const Top = () => {
  var settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    centerPadding: "20px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <section className='pt-[100px]'>
        <div className=''>
          <h4 className='text-center text-[24px] font-bold'>Blog</h4>
          <h2 className='text-center lg:text-[48px] sm:text-[36px] font-bold'>Latest News</h2>
        </div>
      <Slider {...settings}>
        <div className='px-3'>
          <img src={messi} alt="" />
          <h3 className='lg:text-[26px] pt-7 font-bold font-pops sm:text-[20px]'>Tha best of web design and web design insprition</h3>
          <p className='lg:text-[20px] sm:text-[16px] font-pops pt-3'>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first ...</p>
        </div>
        <div className='px-3'>
          <img className='' src={silider} alt="" />
          <h3 className='lg:text-[26px] sm:text-[20px] pt-7 font-bold font-pops'>Tha best of web design and web design insprition</h3>
          <p className='lg:text-[20px] sm:text-[16px] font-pops pt-3'>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first ...</p>
        </div>
        <div className='px-3'>
          <img src={pash} alt="" />
          <h3 className='lg:text-[26px] sm:text-[20px] pt-7 font-bold font-pops'>Tha best of web design and web design insprition</h3>
          <p className='lg:text-[20px] sm:text-[16px] font-pops pt-3'>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first ...</p>
        </div>
      </Slider>
    </section>
  );
}

export default Top;
