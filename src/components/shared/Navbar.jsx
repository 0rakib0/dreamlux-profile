import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FiHome, FiUser, FiImage, FiGrid, FiStar, FiPhone } from "react-icons/fi";
import Image from 'next/image'

function Navbar() {

  const NavItems = [
    { id: 1, name: 'Home', icon: <FiHome />, path: '/' },
    { id: 2, name: 'About', icon: <FiUser />, path: '/' },
    { id: 3, name: 'Gellery', icon: <FiImage />, path: '/' },
    { id: 4, name: 'Projects', icon: <FiGrid />, path: '/' },
    { id: 5, name: 'Reviews', icon: <FiStar />, path: '/' },
    { id: 6, name: 'Contact', icon: <FiPhone />, path: '/' },
  ]

  return (
    <div className='shadow-md bg-white sticky top-0 z-50'>
      <div className='md:flex items-center'>

        {/* Left */}
        <div className='flex justify-center md:flex-1 md:mx-6 md:justify-start'>
          <Image
            src="/DRM Update Logo.png"
            alt="DreamLux Logo"
            width={100}
            height={100}
          />
        </div>

        {/* Center */}
        <ul className='flex items-center justify-center gap-2 md:gap-4 text-md flex-1'>
          {
            NavItems.map(navItem =>
              <li
                className='group flex flex-col items-center justify-center md:flex-row md:gap-2
            lg:p-2 p-[4px] hover:rounded-md active:rounded-md cursor-pointer
            transition-all duration-300 ease-in-out
            hover:bg-[#0E6B66] hover:text-white hover:-translate-y-1 active:-translate-y-1
            active:bg-[#0E6B66] active:text-white'
                key={navItem.id}
              >
                <span className='text-2xl lg:group-hover:scale-125 transition-transform duration-300'>
                  {navItem.icon}
                </span>

                <span className='transition-all duration-300'>{navItem.name}</span>
              </li>
            )
          }
        </ul>

        {/* Right */}
        <div className='flex-1'></div>

      </div>
    </div>
  )
}

export default Navbar