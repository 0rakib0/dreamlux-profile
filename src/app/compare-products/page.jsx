"use client"
import React, { useState } from 'react'
import Image from 'next/image'

function CompareProducts() {

    const [selectedImage, setSelectedImage] = useState(null);

    const comparisons = [
        {
            id: 1,
            title: "Luxury Bed",
            catalogImage: "/gellery/DP-1070.jpg",
            realImage: "/gellery/DP-1071.jpg",
            match: 95,
            changes: [
                "রঙ পরিবর্তন করা হয়েছে",
                "সাইজ কাস্টমাইজ করা হয়েছে",
                "এক্সট্রা স্টোরেজ যুক্ত করা হয়েছে"
            ]
        },
        {
            id: 2,
            title: "Modern Sofa",
            catalogImage: "/gellery/DP-1072.jpg",
            realImage: "/gellery/DP-1166.jpg",
            match: 90,
            changes: [
                "ফ্যাব্রিক পরিবর্তন করা হয়েছে",
                "ডিজাইন একটু modify করা হয়েছে"
            ]
        },
        {
            id: 3,
            title: "Modern Sofa",
            catalogImage: "/gellery/DP-1072.jpg",
            realImage: "/gellery/DP-1166.jpg",
            match: 90,
            changes: [
                "ফ্যাব্রিক পরিবর্তন করা হয়েছে",
                "ডিজাইন একটু modify করা হয়েছে"
            ]
        },
        {
            id: 4,
            title: "Modern Sofa",
            catalogImage: "/gellery/DP-1072.jpg",
            realImage: "/gellery/DP-1166.jpg",
            match: 90,
            changes: [
                "ফ্যাব্রিক পরিবর্তন করা হয়েছে",
                "ডিজাইন একটু modify করা হয়েছে"
            ]
        },
        {
            id: 5,
            title: "Modern Sofa",
            catalogImage: "/gellery/DP-1072.jpg",
            realImage: "/gellery/DP-1166.jpg",
            match: 90,
            changes: [
                "ফ্যাব্রিক পরিবর্তন করা হয়েছে",
                "ডিজাইন একটু modify করা হয়েছে"
            ]
        },
        {
            id: 6,
            title: "Modern Sofa",
            catalogImage: "/gellery/DP-1072.jpg",
            realImage: "/gellery/DP-1166.jpg",
            match: 90,
            changes: [
                "ফ্যাব্রিক পরিবর্তন করা হয়েছে",
                "ডিজাইন একটু modify করা হয়েছে"
            ]
        },
        {
            id: 7,
            title: "Modern Sofa",
            catalogImage: "/gellery/DP-1072.jpg",
            realImage: "/gellery/DP-1166.jpg",
            match: 90,
            changes: [
                "ফ্যাব্রিক পরিবর্তন করা হয়েছে",
                "ডিজাইন একটু modify করা হয়েছে"
            ]
        },
        {
            id: 8,
            title: "Modern Sofa",
            catalogImage: "/gellery/DP-1072.jpg",
            realImage: "/gellery/DP-1166.jpg",
            match: 98,
            changes: [
                "ফ্যাব্রিক পরিবর্তন করা হয়েছে",
                "ডিজাইন একটু modify করা হয়েছে"
            ]
        }
    ]

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 px-4 lg:px-8">

                {comparisons.map((item) => (

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

export default CompareProducts