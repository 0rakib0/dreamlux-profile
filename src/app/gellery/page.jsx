'use client'
import GelleryDisplay from '@/components/productGelery/GelleryDisplay';
import React from 'react'
import useGellery from '@/hooks/useGellery';
import GelleryBanner from '@/components/productGelery/gelleryBanner';

function Gellry() {
    const gallerys = useGellery();
    return (
        <div>
            <GelleryBanner></GelleryBanner>
            <div className='text-[#0E6B66] text-xl text-center font-bold mt-8 -mb-5'>
                <h4>আমাদের ডেলিভারি করা কিছু প্রোডাক্টের ছবি</h4>
            </div>
            <GelleryDisplay gallerys={gallerys}></GelleryDisplay>
        </div>
    )
}

export default Gellry