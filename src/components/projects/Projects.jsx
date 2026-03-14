'use client'
import React from 'react'
import SectionTitle from '../shared/sectionTitle/SectionTitle'
import { FaEye } from "react-icons/fa";
import Image from 'next/image'
function Projects() {
    return (
        <div>
            <SectionTitle title="Complated Projects" subTitle="আমাদের সম্পন্ন করা প্রজেক্ট" width='lg:w-2/4 w-full'></SectionTitle>

            <div className='mt-6 grid grid-cols-2 lg:grid-cols-4 gap-2'>
                {/* {gallerys.slice(0, 8).map((gallery) => ( */}
                <div
                    className="group relative overflow-hidden rounded-xl border border-gray-200 cursor-pointer transition hover:shadow-xl"
                    onClick={() => {
                        document.getElementById("gallery").showModal();
                    }}
                >

                    {/* Image */}
                    <Image
                        src="/gellery/DP-1070.jpg"
                        alt="Luxury Bed"
                        width={800}
                        height={600}
                        className="w-full h-auto transition duration-500 group-hover:scale-110"
                    />

                    {/* Category Badge */}
                    <span className="absolute top-3 left-3 bg-[#0E6B66] text-white text-xs px-3 py-1 rounded-full shadow">
                        Bedroom
                    </span>

                    {/* Overlay Button */}
                    <div className="absolute inset-0 flex items-center justify-center 
                    bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300">

                        <button className="flex items-center gap-2 bg-white text-[#0E6B66] px-4 py-2 rounded-md font-semibold shadow-lg hover:scale-105 transition">
                            <FaEye className="text-lg" />
                            View
                        </button>

                    </div>

                    {/* Card Info */}
                    <div className="p-4 bg-white">

                        <h4 className="font-semibold text-lg mb-1">
                            Luxury Bedroom Set
                        </h4>

                        <div className="flex justify-between text-sm text-gray-500">

                            <span>📍Gulshan, Dhaka</span>

                            <span>01-02-2025</span>

                        </div>

                    </div>

                </div>

            </div>
            <button className='block mx-auto bg-[#0E6B66] text-white py-3 mt-4 px-6 rounded-sm icon-shadow'>
                সবগুলো দেখুন
            </button>
        </div>
    )
}

export default Projects