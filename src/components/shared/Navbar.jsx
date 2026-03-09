import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import Image from 'next/image'

function Navbar() {

  const NavItems = [
    { id: 1, name: 'Home', icon: <IoHomeOutline />, path: '/' },
    { id: 2, name: 'About', icon: <IoHomeOutline />, path: '/' },
    { id: 3, name: 'Gellery', icon: <IoHomeOutline />, path: '/' },
    { id: 4, name: 'Projects', icon: <IoHomeOutline />, path: '/' },
    { id: 5, name: 'Reviews', icon: <IoHomeOutline />, path: '/' },
    { id: 6, name: 'Contact', icon: <IoHomeOutline />, path: '/' },
  ]

  return (
    <div className='shadow-sm bg-white'>
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
        <ul className='flex items-center justify-center  gap-2 md:gap-4 text-md flex-1'>
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
                <span className='text-lg md:text-base lg:group-hover:scale-125 transition-transform duration-300'>
                  {navItem.icon}
                </span>

                <span className='transition-all duration-300'>{navItem.name}</span>
              </li>
            )
          }
        </ul>

        {/* Right empty space */}
        <div className='flex-1'></div>

      </div>
    </div>
  )
}

export default Navbar