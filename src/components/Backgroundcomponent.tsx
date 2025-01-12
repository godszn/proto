'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import bg from '../assets/bg1.jpg';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS

const Backgroundcomponent = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration (in ms)
  }, []);

  return (
    <div
      className='background-wrapper relative h-screen flex flex-col text-white p-20 gap-[37%] bg-cover bg-center'
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgb(49 45 50 / 49%)",
          zIndex: 1,
        }}
      ></div>
      
      {/* Logo with AOS animation */}
      <nav className='nav-wrapper relative z-[2] w-full flex flex-wrap items-center justify-between'
        data-aos="fade-in" // Apply AOS animation
        data-aos-duration="1000" // Set duration (optional)
        data-aos-offset="200"  // Offset (optional)
      >
        <div className='logo text-[30px] md:text-[35px]'>
          Logo
        </div>
        <div className='navlinks hidden md:block'>
          <ul className='flex gap-6 text-[19px]'>
            <li>Overview</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>

      {/* Company text with AOS animation */}
      <main className='company-text z-[2]'
        data-aos="fade-left" // Apply AOS animation (from the left)
        data-aos-duration="1000"
        data-aos-offset="200"
      >
        <h1
          className='text-[40px] md:text-[50px] lg:text-[70px] text-white border-l-[5px] border-orange-500 pl-2 leading-tight'
        >
          Company Brief
        </h1>
      </main>
    </div>
  );
};

export default Backgroundcomponent;
