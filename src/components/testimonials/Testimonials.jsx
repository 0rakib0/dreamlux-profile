"use client"
import React, { useState } from 'react'
import SectionTitle from '../shared/sectionTitle/SectionTitle'
import { FaQuoteLeft } from "react-icons/fa";
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useReviews from '@/hooks/useReviews';


function TestimonialCard({ t, openModal }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:-translate-y-1 hover:shadow-2xl">

            {/* Screenshot */}
            <div
                className="w-full h-56 relative cursor-pointer"
                onClick={() => openModal(t.image)}
            >
                <Image
                    src={t.image}
                    alt={`Screenshot by ${t.name}`}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col h-full">

                <div className="text-[#0E6B66] text-2xl mb-3">
                    <FaQuoteLeft />
                </div>

                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {t.message}
                </p>

                {/* Client */}
                <div className="mt-auto">
                    <h4 className="font-semibold text-[#0E6B66]">{t.name}</h4>
                    <span className="text-gray-500 text-sm">{t.designation}</span>
                </div>

            </div>

        </div>
    );
}


function Testimonials() {

    const [selectedImage, setSelectedImage] = useState(null);


    const reviews = useReviews()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div>
            <SectionTitle title="What Our Clients Say" subTitle="কাস্টমারের অভিজ্ঞতা" width='lg:w-1/2 w-full'></SectionTitle>
            <div className="slider-container mt-6 sm:hidden">
                <Slider {...settings}>
                    {reviews.slice(0, 8).map((t) => (
                        <div key={t.id} className="p-3">
                            <TestimonialCard
                                t={t}
                                openModal={(img) => {
                                    setSelectedImage(img);
                                    document.getElementById("testimonials").showModal();
                                }}
                            ></TestimonialCard>
                        </div>
                    ))}
                </Slider>
            </div>


            <div className="hidden sm:grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8">

                {reviews.slice(0, 6).map((t) => (
                    <TestimonialCard
                        key={t.id}
                        t={t}
                        openModal={(img) => {
                            setSelectedImage(img);
                            document.getElementById("testimonials").showModal();
                        }}
                    />
                ))}

            </div>

            <div className='flex mt-6 pb-4'>
                <button className='block mx-auto bg-[#0E6B66] text-white py-3 mt-4 px-6 rounded-sm icon-shadow'>
                    আপনার মতামত জানান
                </button>
            </div>

            <dialog id="testimonials" className="modal">
                <div className="modal-box p-0 border-none shadow-none">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost text-white bg-[#0E6B66] absolute right-2 top-2">✕</button>
                    </form>

                    {selectedImage && (
                        <Image
                            src={selectedImage}
                            alt="Client Review"
                            width={900}
                            height={700}
                            className="w-full rounded-lg"
                        />
                    )}

                </div>
            </dialog>
        </div>
    )
}

export default Testimonials