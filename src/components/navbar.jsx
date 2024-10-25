import React, { useState, useEffect } from "react";
import { Spiral as Hamburger } from "hamburger-react";
import { Link, NavLink } from "react-router-dom";
import { useMenu } from "../menuContext";

const Navbar = () => {
  const { menuOpen, toggleMenu } = useMenu(); 

  const handleNavClick = () => {
    toggleMenu();
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      <div className="z-20 w-full h-[12vh] flex items-center fixed justify-center">
        <div className="w-[90%] h-[12vh] flex items-center justify-between">
          <Link to="/" className="md:w-[18%] w-[30%]">
            <h1 className="md:text-[36px] text-[23px] font-normal leading-[29px]">
              MCI CORP
            </h1>
          </Link>
        </div>
      </div>
      <div className="cursor-pointer z-30 fixed top-4 right-5" onClick={handleNavClick}>
        <Hamburger
          size={29}
          toggled={menuOpen}
          color={`${menuOpen ? "white" : "gray"}`}
        />
      </div>

      {/* Overlay that fades in when menu is open */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black opacity-0 ${
          menuOpen ? "opacity-50" : "pointer-events-none"
        } transition-opacity duration-500 z-10`}
        onClick={handleNavClick}
      />

      {/* Menu */}
      <div
        className={`fixed top-0 md:w-[50%] w-full h-[100dvh] bg-black flex z-20 text-white items-center justify-center flex-col gap-5 ${
          menuOpen ? "" : "ml-[-1000px]"
        } transition-all ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] duration-[1500ms]`}
      >
        <div className="flex flex-col items-end justify-between w-full h-full">
          <div className="flex flex-col text-end justify-center w-[60%] leading-tight pt-16 px-10 text-[#464646]">
            <NavLink
              to="/"
              className="font-bold md:text-[60px] text-[30px] hover:text-[#ffffff] transition duration-300"
              onClick={handleNavClick}
            >
              HOME
            </NavLink>
            <NavLink
              to="project"
              className="font-bold md:text-[60px] text-[30px] hover:text-[#ffffff] transition duration-300"
              onClick={handleNavClick}
            >
              PROJECTS
            </NavLink>
            <NavLink
              to="about"
              className="font-bold md:text-[60px] text-[30px] hover:text-[#ffffff] transition duration-300"
              onClick={handleNavClick}
            >
              ABOUT
            </NavLink>
          </div>

          <div className="flex flex-col text-end px-10 mb-10 w-[300px] text-xs">
            <p className="mb-5">
              340 HENRY STREET UNIT #17, UPPER BRANTFORD, ONTARIO N3S 7V9,
              CANADA
            </p>
            <p className="">MCI.CORP@YAHOO.CA</p>
            <p className="mb-5">1-(519) 209-4429</p>
            <p className="mb-5">
              <a href="#">INSTAGRAM</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
