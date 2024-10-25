import React, { useEffect, useState, useRef } from "react";
import Video from "../images/homeVideo.MP4";
import { MdWindow } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Image1 from "../images/projectImage1.jpg";
import Image2 from "../images/projectImage111111111.jpg";
import Image3 from "../images/projectImage7.jpg";
import Image4 from "../images/projectImage11.jpg";
import Slider from "react-slick";
import Logo from "../images/logo.PNG";
import { Link } from "react-router-dom";
import { useMenu } from "../menuContext";

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  const sliderRef = useRef(null);
  const { menuOpen } = useMenu();

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
      className="absolute top-[75%] right-4 transform -translate-y-1/2 cursor-pointer"
    >
      <IoIosArrowForward size={30} className="text-white" />
    </div>
  );

  const PrevArrow = () => (
    <div
      onClick={() => sliderRef.current.slickPrev()}
      className="absolute top-[75%] left-4 transform -translate-y-1/2 cursor-pointer"
    >
      <IoIosArrowBack size={30} className="text-white" />
    </div>
  );

  return (
    <div className="w-full">
      {/* sliding thing */}
      <div
        className={`fixed z-50 top-0 left-0 w-full h-full bg-black flex items-center justify-center transition-transform duration-1000 delay-500 ${
          isMounted ? "-translate-y-full" : "translate-y-0"
        }`}
      >8445
        <img src={Logo} className="md:w-[17%] w-[39%]" alt="" />
      </div>

      <div className="w-full lg:h-[100dvh] md:h-[61dvh] h-[68dvh] flex items-end justify-end">
        <img
          src={Image4}
          alt=""
          className={`bject-cover ${
            menuOpen ? "w-[80%]" : "w-[100%]"
          } transition-all transition-ease duration-[1500ms] h-full`}
        />
      </div>

      <div className="w-full flex flex-col items-center bg-[#0d0d0f]  lg:pt-24 md:pt-10 pt-20 ">
        <div className="w-full flex justify-center  items-center ">
          <p className="lg:text-[55px] md:text-[42px] text-[25px] lg:w-[60%]  md:w-[85%] w-[94%] font-[900] leading-tight" data-aos="fade-out">
            AT MCI AORP, IT'S NOT JUST ABOUT THE SPACES WE CREATE.
          </p>
        </div>

        <div className="w-full px-7 md:px-0 flex justify-center items-center  lg:h-[20dvh] md:h-[18dvh] h-[34dvh] lg:my-14 my-10" data-aos="fade-out">
          <p className="lg:text-[19px] md:text-[19px] text-[16px]  font-[300] lg:pl-[410px] md:pr-[100px] md:pl-[250px]">
            It's about the people who will call those spaces home whether
            they're employees, clients, or visitors. For over two decades, we’ve
            built more than just office spaces or commercial properties in
            Brantford. We’ve been committed to building the environments where
            businesses thrive and communities flourish. Every project we take on
            isn’t just a contract it’s a partnership.
          </p>
        </div>

        <div className="lg:w-[82%] md:w-[92%] w-full  h-[90dvh] relative lg:h-[100dvh] md:h-[85dvh] home-bg-one  md:mb-14 mb-20" data-aos="fade-in">
          <p className="bg-[#00000090] w-full h-[15dvh] flex items-center justify-end p-10 font-[200] absolute bottom-0">
            27 Copernicus
          </p>
        </div>

        <div className="w-full flex justify-center items-center lg:h-[50dvh] md:h-[35dvh] h-[58dvh] lg:my-14 md:my-5" data-aos="slide-right">
          <p className="lg:text-[20px] md:text-[18px] text-[16px] lg:w-[60%] md:w-[70%] w-[90%] font-[300]">
            MCI Corp Proudly Based in Brantford Since 1995 Founded by Jang
            Panag, MCI Corp has been a cornerstone of Brantford’s business
            community for over three decades. Jang, with his deep passion for
            both business and the city he loves, takes great pride in helping
            companies find the perfect space to fit their needs and budget.{" "}
            <br />
            <br />
            Before launching MCI, Jang was in textile manufacturing, bringing a
            wealth of experience and dedication to the table. At MCI, we don’t
            just help businesses find space we partner with them in their
            growth. Many of our clients have expanded alongside us, and as their
            businesses flourish, we’ve been there to assist them in
            transitioning to larger spaces, ensuring their success continues
            without limits.
          </p>
        </div>

        <div className="w-full flex h-full md:justify-end justify-center items-center md:mb-14 mb-10 " data-aos="fade-out">
          <div className="md:w-[50%] w-full relative md:h-[100dvh] h-[65dvh] home-bg-two">
            <p className="w-full h-[15dvh] flex items-center justify-end p-10 font-[200] absolute bottom-0">
              340 Henry
            </p>
          </div>
        </div>

        <div className="w-full flex lg:pl-[250px] md:pl-[150px]  my-14"  data-aos="fade-in">
          <div className="lg:w-[40%] md:w-[90%] w-full  relative md:h-[100dvh] h-[65dvh] home-bg-three">
            <p className="w-full h-[15dvh] flex items-center justify-end p-10 font-[200] absolute bottom-0">
              27 Copernicus
            </p>
          </div>
        </div>

        <div className="w-full flex md:my-14 my-2">
          <div className="md:w-[80%] w-full  relative md:h-[100dvh] h-[60dvh] home-bg-four"  data-aos="fade-in">
            <p className="w-full h-[15dvh] flex items-center justify-end p-10 font-[200] absolute bottom-0">
              45 Dalkeith
            </p>
          </div>
        </div>

        <div className="flex lg:w-[65%] w-[90%] md:my-14 my-[19%] lg:h-[30dvh] justify-between items-center"  data-aos="slide-left">
          <p className="font-[900] lg:text-[50px] md:text-[35px] text-[20px] leading-tight">
            OUR <br /> PROJECTS
          </p>
          <Link
            to="project"
            className="flex items-center justify-center gap-1 text-[15px]"
          >
            VIEW ALL PROJECTS <MdWindow size={30} />
          </Link>
        </div>

        {/* Image Slider */}
        <div className="relative w-full md:h-[70vh] h-[50dvh] bg-black "  data-aos="fade-in">
          <Slider
            ref={sliderRef}
            {...sliderSettings}
            className="w-full h-full  "
          >
            <div>
              <img
                src={Image1}
                alt="Project Image 1"
                className="w-full md:h-[70dvh] h-[50dvh] object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src={Image2}
                alt="Project Image 2"
                className="w-full md:h-[70dvh] h-[50dvh] object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src={Image3}
                alt="Project Image 3"
                className="w-full md:h-[70dvh] h-[50dvh] object-cover"
                loading="lazy"
              />
            </div>
          </Slider>
          <NextArrow />
          <PrevArrow />
        </div>
      </div>
    </div>
  );
};

export default Home;
