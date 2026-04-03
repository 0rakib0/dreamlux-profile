"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import useCompare from '@/hooks/useCompare';
import DisplayCompareData from '@/components/compareProduct/displayCompare';

function CompareProducts() {

    const comparesData = useCompare()

    return (
        <div>

            {/* Banner */}
            <div className="px-2 lg:px-6 py-3">
                <div className="relative w-full h-[120px] sm:h-[160px] lg:h-[220px] rounded-xl overflow-hidden">

                    <Image
                        src="/gellery-cover.jpg"
                        alt="Compare Cover"
                        fill
                        className="object-cover"
                        priority
                    />

                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">

                        <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold">
                            Catalog vs Reality
                        </h2>

                        <p className="text-[10px] sm:text-sm lg:text-base mt-1">
                            আপনি যা দেখেন, আমরা তা-ই বাস্তবে তৈরি করি
                        </p>

                    </div>

                </div>
            </div>

            {/* Title */}
            <div className='text-[#0E6B66] text-xl text-center font-bold mt-8'>
                <h4>ডিজাইন বনাম বাস্তব কাজ</h4>
            </div>

            {/* Compare Section */}
            <DisplayCompareData comparesData={comparesData}></DisplayCompareData>

        </div>
    )
}

export default CompareProducts