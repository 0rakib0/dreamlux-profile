import React from 'react'
import "./banner.css"
import { FaFacebookF, FaInstagram, FaWhatsapp} from "react-icons/fa";
import Link from 'next/link';
function Banner() {
    return (
        <div className="heros pl-6 md:pl-[50px] lg:pl-[120px]">
            <div className="w-2/4">
                <h1 className="lg:text-5xl text-xl md:text-2xl font-bold text-[#0E6B66]">ঘর নয়, আমরা স্বপ্ন সাজাই</h1>
                <p className='lg:py-4 py-2'>
                    আপনার ঘরের জন্য আধুনিক, টেকসই এবং কাস্টম ফার্নিচার—যেখানে সৌন্দর্য আর আরামের নিখুঁত সমন্বয়।
                </p>
                <div className='flex text-xl pb-4 text-[] gap-2'>
                    <span className='border-2 border-[#0E6B66] bg-[#0E6B66] text-white p-1 rounded-full icon-shadow'><Link href="https://wa.me/01344788045"><FaWhatsapp  /></Link></span>
                    <span className='border-2 border-[#0E6B66] text-[#0E6B66] p-1 rounded-full icon-shadow'><Link href="https://www.instagram.com/dreamluxfurnished/"><FaInstagram /></Link></span>
                    <span className='border-2 border-[#0E6B66] text-[#0E6B66] p-1 rounded-full icon-shadow'><Link href="https://www.facebook.com/dreamluxfurnished"><FaFacebookF /></Link></span>
                </div>
                <button className='bg-[#0E6B66] text-white py-1 px-2 rounded-sm icon-shadow'><Link href="https://business.facebook.com/latest/inbox/all/?asset_id=108640347503179">ফ্রি পরামর্শ নিন</Link></button>
            </div>
        </div>
    )
}

export default Banner