"use client"
import React, { useState } from 'react'
import SectionTitle from '../shared/sectionTitle/SectionTitle'
import Image from 'next/image'
import { FaEye } from "react-icons/fa";
import useGellery from '@/hooks/useGellery';
import GelleryDisplay from './GelleryDisplay';
function Gellery() {

    const gallerys = useGellery();
    const limitedGallery = gallerys.slice(0, 8);

    return (
        <div>
            <SectionTitle title="Delivery Product Gallery" subTitle="ডেলিভারি প্রোডাক্ট" width='lg:w-1/4 w-full'></SectionTitle>
            <GelleryDisplay gallerys={limitedGallery}></GelleryDisplay>
            <button className='block mx-auto bg-[#0E6B66] text-white py-3 mt-4 px-6 rounded-sm icon-shadow'>
                সবগুলো দেখুন
            </button>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}

        </div>
    )
}

export default Gellery