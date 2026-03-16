import React from 'react'
import Image from 'next/image'
import AboutUs from '@/components/aboutUs/AboutUs'
function AboutPage() {
    return (
        <div className="max-w-7xl mx-auto px-2 lg:px-6 lg:px-10">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-4">

                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[420px]">

                    {/* Text Section */}
                    <div>

                        <h1 className="text-3xl lg:text-5xl font-bold text-[#0E6B66] mb-6">
                            About DreamLux
                        </h1>

                        <p className="text-gray-600 leading-relaxed text-lg">
                            DreamLux হলো একটি প্রিমিয়াম কাস্টম ফার্নিচার ব্র্যান্ড,
                            যা প্রতিটি কাস্টমারের স্বপ্নের ঘর সাজানোর লক্ষ্য নিয়ে কাজ করে।
                            আধুনিক ডিজাইন, উন্নত মানের উপকরণ এবং দক্ষ কারিগরদের মাধ্যমে
                            আমরা আপনার ঘরের জন্য তৈরি করি আরামদায়ক ও স্টাইলিশ ফার্নিচার।
                        </p>

                        <button className="mt-6 bg-[#0E6B66] text-white px-8 py-3 rounded-md shadow-md hover:bg-[#095a55] transition">
                         যোগাযোগ করুন
                        </button>

                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center">

                        <Image
                            src="/aboutUs.png"
                            alt="DreamLux Furniture"
                            width={400}
                            height={400}
                            className="rounded-xl shadow-lg rounded-xl shadow-lg hover:scale-105 transition duration-500"
                        />

                    </div>

                </div>

            </div>
            <div className='my-6 bg-white lg:p-4'>
                <AboutUs></AboutUs>
            </div>
        </div>
    )
}

export default AboutPage