"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { FaQuoteLeft } from "react-icons/fa";
import useReviews from '@/hooks/useReviews'

function Reviews() {

    const reviews = useReviews()
    const [selectedImage, setSelectedImage] = useState(null)
    console.log(reviews)

    return (
        <div>

            {/* Banner */}
            <div className="px-2 lg:px-6 py-3">
                <div className="relative w-full h-[120px] sm:h-[160px] lg:h-[220px] rounded-xl overflow-hidden">

                    <Image
                        src="/small_benner-2.jpg"
                        alt="Revire section Cover"
                        fill
                        className="object-cover"
                        priority
                    />

                    <div className="absolute tex-[#0f6b66] inset-0 flex flex-col justify-center items-center text-center px-4">
                        <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold">
                            Our Reviews
                        </h2>
                        <p className="text-[10px] sm:text-sm lg:text-base mt-1">
                            আমাদের সম্মানিত কাস্টমারদের করা কিছু রিভিউ
                        </p>
                    </div>

                </div>
            </div>

            {/* Title */}
            <div className='text-[#0E6B66] text-xl text-center font-bold mt-8'>
                <h4>Some Client Reviews</h4>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 lg:px-8">

                {reviews?.map((t) => (
                    <div key={t.id}
                        className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">

                        {/* Screenshot */}
                        <div
                            className="w-full h-52 relative cursor-pointer"
                            onClick={() => {
                                setSelectedImage(t.image)
                                document.getElementById("review_modal").showModal()
                            }}
                        >
                            <Image
                                src={t.image}
                                alt={`Review by`}
                                fill
                                className="object-cover transition duration-500 hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col h-full">

                            <div className="text-[#0E6B66] text-xl mb-2">
                                <FaQuoteLeft />
                            </div>

                            <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                                {t.message}
                            </p>

                            <div>
                                <h4 className="font-semibold text-[#0E6B66]">
                                    {t.name}
                                </h4>
                                <span className="text-gray-500 text-sm">
                                    {t.designation}
                                </span>
                            </div>
                        </div>

                    </div>
                ))}

            </div>

            {/* Modal */}
            <dialog id="review_modal" className="modal">
                <div className="modal-box p-0 border-none shadow-none max-w-3xl">

                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost text-white bg-[#0E6B66] absolute right-2 top-2">
                            ✕
                        </button>
                    </form>

                    {selectedImage && (
                        <Image
                            src={selectedImage}
                            alt="Client Review"
                            width={1000}
                            height={700}
                            className="w-full h-auto"
                        />
                    )}

                </div>
            </dialog>

        </div>
    )
}

export default Reviews