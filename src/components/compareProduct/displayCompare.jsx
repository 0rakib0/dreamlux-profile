"use client"
import useCompare from '@/hooks/useCompare'
import React, { useState } from 'react'
import Image from 'next/image'

function DisplayCompareData({comparesData}) {
    console.log(comparesData)
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 px-4 lg:px-8">

                {comparesData.map((item) => (

                    <div key={item.id}
                        className="bg-white rounded-2xl shadow-md p-4 transition hover:shadow-xl hover:-translate-y-1">

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-[#0E6B66] mb-4">
                            {item.title}
                        </h3>

                        {/* Images */}
                        <div className="grid grid-cols-2 gap-3">

                            {/* Catalog */}
                            <div>
                                <p className="text-xs text-gray-500 mb-1 text-center">
                                    Catalog
                                </p>
                                <div className="relative h-36 sm:h-44 rounded-lg overflow-hidden"
                                    onClick={() => {
                                        setSelectedImage(item.catalogImage);
                                        document.getElementById("compareProduct").showModal();
                                    }}>
                                    <Image
                                        src={item.catalogImage}
                                        alt="Catalog"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Real */}
                            <div>
                                <p className="text-xs text-gray-500 mb-1 text-center">
                                    Our Work
                                </p>
                                <div className="relative h-36 sm:h-44 rounded-lg overflow-hidden"
                                    onClick={() => {
                                        setSelectedImage(item.realImage);
                                        document.getElementById("compareProduct").showModal();
                                    }}>

                                    <Image
                                        src={item.realImage}
                                        alt="Real Work"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                        </div>

                        {/* Match Percentage */}
                        <div className="mt-4">

                            <p className="text-sm font-semibold text-[#0E6B66]">
                                Match: {item.match}%
                            </p>

                            <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                                <div
                                    className="bg-[#0E6B66] h-2 rounded-full"
                                    style={{ width: `${item.match}%` }}
                                ></div>
                            </div>

                        </div>

                        {/* Changes */}
                        <div className="mt-4">
                            <h4 className="text-sm font-semibold mb-2">
                                কি পরিবর্তন করা হয়েছে:
                            </h4>

                            <ul className="text-sm text-gray-600 space-y-1">
                                {item.changes.map((change, i) => (
                                    <li key={i}>✔ {change}</li>
                                ))}
                            </ul>
                        </div>

                    </div>

                ))}

            </div>

            {/* compare item show modal */}

            <dialog id="compareProduct" className="modal">
                <div className="modal-box p-0 border-none shadow-none">
                    <form method="dialog">
                        <button className="btn btn-sm bg-[#0E6B66] text-white btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    {selectedImage && (
                        <Image
                            src={selectedImage}
                            alt="Luxury Bed"
                            width={800}
                            height={600}
                            className="w-full h-auto"
                        />
                    )}

                </div>
            </dialog>
        </div>
    )
}

export default DisplayCompareData