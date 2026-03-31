import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FiHome, FiUser, FiImage, FiGrid, FiStar, FiPhone, } from "react-icons/fi";
import { FaBalanceScale } from "react-icons/fa";
import Image from 'next/image'
import Link from 'next/link';

function Navbar() {

  const NavItems = [
    { id: 1, name: 'Home', icon: <FiHome />, path: '/' },
    { id: 2, name: 'About', icon: <FiUser />, path: '/about-us' },
    { id: 3, name: 'Gellery', icon: <FiImage />, path: '/' },
    { id: 4, name: 'Projects', icon: <FiGrid />, path: '/' },
    { id: 5, name: 'Reviews', icon: <FiStar />, path: '/' },
    { id: 6, name: 'Catalog vs Reality', icon: <FaBalanceScale />, path: '/' },
    { id: 7, name: 'Contact', icon: <FiPhone />, path: '/' },
  ]

  return (
    <div className='shadow-md bg-white md:sticky top-0 z-50'>
      <div className='md:flex items-center'>

        {/* Left */}
        <div className='flex items-center md:flex-1 md:mx-6 justify-between md:justify-start border-b border-[#0E6B66]'>
          <div>
            <Image
              src="/DRM Update Logo.png"
              alt="DreamLux Logo"
              width={100}
              height={100}
              className="w-[70px] md:w-[100px] h-auto"
            />
          </div>
          {/* Mobile Top Menu */}
          <div className="sm:hidden text-[#0E6B66] text-sm py-2">
            <ul className="flex justify-center items-center gap-6 mr-6">

              <li>
                <Link href="/" className="hover:underline">
                  ABOUT US
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:underline">
                  CONTACT US
                </Link>
              </li>

            </ul>
          </div>
        </div>

        {/* mobile phone navbar */}
        <div className="sm:hidden fixed bottom-0 left-0 w-full bg-[#0E6B66]/95 backdrop-blur-md shadow-[0_-2px_10px_rgba(0,0,0,0.2)] z-50 rounded-b-lg">

          <ul className="flex justify-around items-center py-2">

            {NavItems.filter(item => item.id !== 2 && item.id !== 7).map((navItem) => (
              <li key={navItem.id} className="flex flex-col items-center justify-center">

                <Link
                  href={navItem.path}
                  className="flex flex-col items-center text-white/80 hover:text-white active:text-white"
                >

                  {/* Icon */}
                  <span className="text-xl mb-[2px] transition-transform duration-300 hover:scale-110">
                    {navItem.icon}
                  </span>

                  {/* Text */}
                  <span className="text-[10px]">
                    {navItem.name}
                  </span>

                </Link>

              </li>
            ))}

          </ul>

        </div>


        {/* larg design navbar design */}

        {/* Center */}
        <ul className='flex items-center justify-center gap-1 md:gap-4 text-md flex-1'>
          {
            NavItems.map(navItem =>
              <li
                className='hidden sm:block group flex flex-col items-center justify-center md:flex-row md:gap-2
            lg:p-2 p-[4px] hover:rounded-md active:rounded-md cursor-pointer
            transition-all duration-300 ease-in-out
            hover:bg-[#0E6B66] hover:text-white hover:-translate-y-1 active:-translate-y-1
            active:bg-[#0E6B66] active:text-white'
                key={navItem.id}
              >
                <Link href={navItem.path}><span className='text-2xl lg:group-hover:scale-125 transition-transform duration-300'>
                  {navItem.icon}
                </span>

                  <span className='transition-all duration-300'>{navItem.name}</span></Link>
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