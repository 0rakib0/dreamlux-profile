"use client"
import React from 'react'
import SectionTitle from '../shared/sectionTitle/SectionTitle'
import { FaQuoteLeft } from "react-icons/fa";
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "রহিম উদ্দিন",
            designation: "Engineer",
            message: "DreamLux এর ফার্নিচার সত্যিই কাস্টমাইজড এবং খুব সুন্দর। আমার ঘর পুরোপুরি সাজানো হয়েছে।"
        },
        {
            id: 2,
            name: "সুমি আক্তার",
            designation: "Teacher",
            message: "আমি খুব খুশি আমার নতুন সোফা এবং বেড সেট নিয়ে। Delivery খুব professional ছিল।"
        },
        {
            id: 3,
            name: "জামাল হোসেন",
            designation: "Business Owner",
            message: "Custom furniture এর জন্য আমি DreamLux কে highly recommend করি।"
        },
        {
            id: 4,
            name: "মীরা রহমান",
            designation: "Housewife",
            message: "আমার বেডরুমের সব ফার্নিচার একদম perfect।"
        },
        {
            id: 5,
            name: "ফারুক শেখ",
            designation: "Architect",
            message: "Quality, design এবং finish সব মিলিয়ে অসাধারণ।"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Default desktop
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // lg device এর জন্য (1024px এর নিচে)
                settings: {
                    slidesToShow: 2, // Medium device
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640, // sm device এর জন্য (640px এর নিচে)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <SectionTitle title="What Our Clients Say" subTitle="কাস্টমারের অভিজ্ঞতা" width='lg:w-1/4 w-full'></SectionTitle>
            <div className="slider-container mt-6">
                <Slider {...settings}>
                    {testimonials.map((t) => (
                        <div key={t.id} className="p-4">
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-2xl">

                                {/* Screenshot */}
                                <div className="w-full h-56 relative" onClick={() => {
                                    // setSelectedImage(gallery.image);
                                    document.getElementById("testimonials").showModal();
                                }}>
                                    <Image
                                        src='/review1.jpg'
                                        alt={`Screenshot by ${t.name}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-500 hover:scale-105"
                                    />
                                </div>

                                {/* Quote & Message */}
                                <div className="p-6 flex flex-col justify-between h-full">
                                    <div className="text-[#0E6B66] text-2xl mb-3">
                                        <FaQuoteLeft />
                                    </div>

                                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                                        {t.message}
                                    </p>

                                    {/* Client Info */}
                                    <div className="mt-auto flex items-center gap-3">
                                        <div>
                                            <h4 className="font-semibold text-[#0E6B66]">{t.name}</h4>
                                            <span className="text-gray-500 text-sm">{t.designation}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className='flex mt-6 pb-4'>
                <button className='block mx-auto bg-[#0E6B66] text-white py-3 mt-4 px-6 rounded-sm icon-shadow'>
                    সবগুলো দেখুন
                </button>
                <button className='block mx-auto bg-[#0E6B66] text-white py-3 mt-4 px-6 rounded-sm icon-shadow'>
                    আপনার মতামত জানান
                </button>
            </div>

            <dialog id="testimonials" className="modal">
                <div className="modal-box p-0 border-none shadow-none">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost text-white bg-[#0E6B66] absolute right-2 top-2">✕</button>
                    </form>

                    <Image
                        src="/review1.jpg"
                        alt="Luxury Bed"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                    />
                </div>
            </dialog>
        </div>
    )
}

export default Testimonials