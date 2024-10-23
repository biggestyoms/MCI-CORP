import React, { useState, useEffect } from 'react';
import { Spiral as Hamburger } from 'hamburger-react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = () => {
    setMenuOpen(false); 
  };

  // Disable scrolling when the menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    // Clean up the effect when the component unmounts or menu closes
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <>
      <div className='z-20 w-full h-[12vh] flex items-center fixed justify-center'>
        <div className='w-[90%] h-[12vh] flex items-center justify-between'>
          <Link to="/" className='md:w-[18%] w-[30%]'>
            <h1 className='md:text-[36px] text-[23px] font-normal leading-[29px]'>MCI CORP</h1>
          </Link>

          <div className='cursor-pointer z-30' onClick={handleMenuOpen}>
            <Hamburger size={29} toggled={menuOpen} color='gray' />
          </div>
        </div>
      </div>

      <div
        className={`absolute w-[50%] h-full bg-black flex z-20 text-white items-center justify-center flex-col gap-5 ${
          menuOpen ? "" : "ml-[-1000px]"
        } transition-all duration-1000`}
      >
        <div className='flex flex-col items-end justify-between w-full h-full'>
          <div className='flex flex-col text-end justify-center w-[60%] leading-tight pt-16 px-10 text-[#464646]'>
            {/* Close the menu when any link is clicked */}
            <NavLink to="/" className="font-bold text-[60px]" onClick={handleNavClick}>HOME</NavLink>
            <NavLink to="project" className="font-bold text-[60px]" onClick={handleNavClick}>PROJECTS</NavLink>
            <NavLink to="about" className="font-bold text-[60px]" onClick={handleNavClick}>ABOUT</NavLink>
          </div>

          <div className="bg-red-500 flex lex-=">
            <p>340 HENRY STREET UNIT #17, UPPER BRANTFORD, ONTARIO N3S 7V9, CANADA</p>
            <p>MCI.CORP@YAHOO.CA</p>
            <p>1-(519) 209-4429</p>
            <p><a href="#">INSTAGRAM</a></p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
