import React, { useEffect, useState, useRef } from 'react';
import Video from "../images/homeVideo.MP4";
import { MdWindow } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Image1 from '../images/projectImage1.jpg'
import Image2 from '../images/projectImage111111111.jpg'
import Image3 from '../images/projectImage7.jpg'
import Image4 from '../images/projectImage11.jpg'
import Slider from "react-slick";
import Logo from '../images/logo.PNG'
import { Link } from 'react-router-dom';


const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 500); 
    return () => clearTimeout(timer); 
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,         
    autoplaySpeed: 3000, 
    arrows: false,
  };

  const NextArrow = () => (
    <div 
      onClick={() => sliderRef.current.slickNext()} 
      className='absolute top-[75%] right-4 transform -translate-y-1/2 cursor-pointer'
    >
      <IoIosArrowForward size={30} className='text-white'/>
    </div>
  );

  const PrevArrow = () => (
    <div 
      onClick={() => sliderRef.current.slickPrev()} 
      className='absolute top-[75%] left-4 transform -translate-y-1/2 cursor-pointer'
    >
      <IoIosArrowBack size={30} className='text-white'/>
    </div>
  );


  return (
    <div className='w-full h-full'>
      {/* sliding thing */}
      <div className={`fixed z-10 top-0 left-0 w-full h-full bg-black flex items-center justify-center transition-transform duration-1000 delay-500 ${isMounted ? '-translate-y-full' : 'translate-y-0'}`}>
      <img src={Logo} className='md:w-[17%] w-[39%]' alt="" />
      </div>

      <div className='w-full lg:h-[100dvh] md:h-[61dvh] h-[68dvh] '>
        <img src={Image4} alt="" className=' object-cover w-full h-full' />
      </div>

      <div className='w-full h-full flex flex-col items-center bg-black  lg:pt-24 md:pt-10 pt-20 '>
        <div className='w-full flex justify-center lg:h-[40dvh] md:h-[25dvh] items-center '>
          <p className='lg:text-[55px] md:text-[42px] text-[25px] lg:w-[60%]  md:w-[85%] w-[94%] font-[900] leading-tight'>
          At MCI Corp, It's Not Just About the Spaces We Create.
          </p>
        </div>

        <div className='w-full px-7 md:px-0 flex justify-center items-center  lg:h-[20dvh] md:h-[18dvh] h-[34dvh] lg:my-14 my-10'>
          <p className='lg:text-[20px] md:text-[20px] text-[17px]  font-[300] lg:pl-[410px] md:pl-[250px]'>
          It's about the people who will call those spaces home whether they're employees, clients, or visitors. For over two decades, we’ve built more than just office spaces or commercial properties in Brantford. We’ve been committed to building the environments where businesses thrive and communities flourish. Every project we take on isn’t just a contract it’s a partnership.
          </p>
        </div>

        <div className='lg:w-[82%] md:w-[92%] w-full  h-[90dvh] relative lg:h-[100dvh] md:h-[85dvh] home-bg-one  md:mb-14 mb-20'>
          <p className='bg-[#00000090] w-full h-[15dvh] flex items-center justify-end p-10 font-[200] absolute bottom-0'>27 Copernicus</p>
        </div>

        <div className='w-full flex justify-center items-center lg:h-[50dvh] md:h-[35dvh] h-[58dvh] lg:my-14 md:my-5'>
          <p className='lg:text-[20px] md:text-[18px] text-[16px] lg:w-[60%] md:w-[70%] w-[90%] font-[300]'>
          MCI Corp Proudly Based in Brantford Since 1995
Founded by Jang Panag, MCI Corp has been a cornerstone of Brantford’s business community for over three decades. Jang, with his deep passion for both business and the city he loves, takes great pride in helping companies find the perfect space to fit their needs and budget. <br/><br/>
Before launching MCI, Jang was in textile manufacturing, bringing a wealth of experience and dedication to the table. At MCI, we don’t just help businesses find space we partner with them in their growth. Many of our clients have expanded alongside us, and as their businesses flourish, we’ve been there to assist them in transitioning to larger spaces, ensuring their success continues without limits.
          </p>
        </div>

        <div className='w-full flex h-full md:justify-end justify-center items-center md:mb-14 mb-10 '>
        <div className='md:w-[50%] w-full relative md:h-[100dvh] h-[65dvh] home-bg-two'>
          <p className='w-full h-[15dvh] flex items-center justify-end p-10 font-[200] absolute bottom-0'>340 Henry</p>
        </div>
        </div>

        <div className='w-full flex lg:pl-[250px] md:pl-[150px]  my-14'>
        <div className='lg:w-[40%] md:w-[90%] w-full  relative md:h-[100dvh] h-[65dvh] home-bg-three'>
          <p className='w-full h-[15dvh] flex items-center justify-end p-10 font-[200] absolute bottom-0'>27 Copernicus</p>
        </div>
        </div>

        <div className='w-full flex md:my-14 my-2'>
        <div className='md:w-[80%] w-full  relative md:h-[100dvh] h-[60dvh] home-bg-four'>
          <p className='w-full h-[15dvh] flex items-center justify-end p-10 font-[200] absolute bottom-0'>45 Dalkeith</p>
        </div>
        </div>

        <div className='flex lg:w-[65%] w-[90%] md:my-14 my-[19%] lg:h-[30dvh] justify-between items-center'>
          <p className='font-[900] lg:text-[50px] md:text-[35px] text-[20px] leading-tight'>OUR <br /> PROJECTS</p>
          <Link to="project" className='flex items-center justify-center gap-1 text-[15px]' >VIEW ALL PROJECTS <MdWindow size={30}/></Link>
        </div>

        {/* Image Slider */}
        <div className='relative w-full md:h-[70vh] h-[50dvh] bg-black  '>
          <Slider ref={sliderRef} {...sliderSettings} className='w-full h-full  '>
            <div>
              <img src={Image1} alt="Project Image 1" className='w-full md:h-[70dvh] h-[50dvh] object-cover' loading='lazy'/>
            </div>
            <div>
              <img src={Image2} alt="Project Image 2" className='w-full md:h-[70dvh] h-[50dvh] object-cover' loading='lazy'/>
            </div>
            <div>
              <img src={Image3} alt="Project Image 3" className='w-full md:h-[70dvh] h-[50dvh] object-cover' loading='lazy'/>
            </div>
          </Slider>
          <NextArrow />
          <PrevArrow />
        </div>
      </div>

    </div>
  );
}

export default Home;
