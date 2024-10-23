import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full h-full flex items-center justify-center overflow-hidden'>
        <div className='h-[27dvh] lg:w-[70%] w-[90%] flex lg:flex-row flex-col items-center justify-between'>
            <div className='lg:w-[24%] w-[55%] flex  items-center justify-between  h-full'>
                <NavLink to="/" className="font-Dm font-[200] text-[13px]"> Home</NavLink>
                <NavLink to="project" className="font-Dm font-[200] text-[13px]"> Projects</NavLink>
                <NavLink to="about"  className="font-Dm font-[200] text-[13px]"> About</NavLink>

            </div>

            <div className='lg:w-[50%] w-[98%] md:gap-5 gap-3 flex items-center justify-between h-full'>
    <div className='md:w-[40%] w-[37%] items-center flex justify-center'>
        <p className='font-[200] text-[13px]'>
            <a href="https://www.google.com/maps/place/340+Henry+Street+Unit+%2317+Upper+Brantford+Ontario+N3S+7V9+Canada" target="_blank" rel="noopener noreferrer">
                340 Henry Street Unit #17, Upper Brantford, Ontario N3S 7V9, Canada
            </a>
        </p>
    </div>

    <div className='md:w-[27%] w-[30%] items-center flex justify-center'>
        <p className='font-[200] text-[13px]'>
            <a href="mailto:mci.corp@yahoo.ca" className="block">mci.corp@yahoo.ca</a> 
            <br />
            <a href="tel:+15192094429" className="block">1-(519) 209-4429</a>
        </p>
    </div>

    <div className='md:w-[20%] w-[27%] b items-center flex justify-center'>
        <p className='font-[200] text-[13px]'>
            <a href="#" className="block">INSTAGRAM</a>
        </p>
    </div>
</div>
        </div>
    </div>
  )
}

export default Footer