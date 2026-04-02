import React from 'react'
import Image from 'next/image'
function GelleryBanner() {
    return (
        <div className="px-2 lg:px-6 py-3">
            <div className="relative w-full h-[120px] sm:h-[160px] lg:h-[220px] rounded-xl overflow-hidden">

                {/* Image */}
                <Image
                    src="/gellery-cover.jpg"
                    alt="Gallery Cover"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">

                    <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold">
                        Our Gallery
                    </h2>

                    <p className="text-[10px] sm:text-sm lg:text-base mt-1">
                        আমাদের কাজের কিছু নির্বাচিত ছবি
                    </p>

                </div>

            </div>
        </div>
    )
}

export default GelleryBanner