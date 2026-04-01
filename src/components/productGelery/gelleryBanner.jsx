import React from 'react'
import Image from 'next/image'
function GelleryBanner() {
    return (
        <div className='py-2 px-2 rounded-lg'>
            <Image
                src="/gellery-cover.jpg"
                alt="DreamLux Logo"
                width={1020}
                height={120}
                className='rounded-lg'
            />
        </div>
    )
}

export default GelleryBanner