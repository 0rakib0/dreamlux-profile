import React from 'react'
import Image from 'next/image'
import AboutUs from '@/components/aboutUs/AboutUs'
import Link from 'next/link'
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
                            আমরা শুধু ফার্নিচার বানাই না,
                            আমরা গড়ি আপনার স্বপ্নের ঘর।
                            প্রতিটি ডিজাইনে থাকে যত্ন,
                            প্রতিটি কাঠে থাকে বিশ্বাস।
                            ক্যাটালগ থেকে বাস্তব—নিখুঁত মিল আমাদের প্রতিশ্রুতি,
                            DreamLux মানেই আস্থা, সৌন্দর্য ও আরামের সমন্বয়।
                        </p>
                        <button className="mt-6 bg-[#0E6B66] text-white px-8 py-3 rounded-md shadow-md hover:bg-[#095a55] transition">
                            <Link href="https://wa.me/+8801344788045">যোগাযোগ করুন</Link>
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


            <div className='my-6 bg-white lg:p-4 p-2'>
                <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-4">

                    <div className="grid lg:grid-cols-2 gap-10">

                        {/* Text Section */}
                        <div>
                            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#0E6B66] mb-4 lg:mb-6">
                                আমাদের মূল লক্ষ্য
                            </h1>

                            <p className="text-gray-600 leading-relaxed text-lg md:text-base lg:text-lg">
                                আমাদের মূল লক্ষ্য হলো কাস্টমারের স্বপ্নকে বাস্তবে রূপ দেওয়া।
                                আপনার ঘরকে কীভাবে আরও সুন্দর ও স্মার্ট করা যায়, সেটাই আমাদের চিন্তা।
                                আমরা প্রতিটি ডিজাইন করি ব্যবহারিকতা এবং সৌন্দর্যের সমন্বয়ে।
                                ক্যাটালগের ডিজাইন যতটা সম্ভব নিখুঁতভাবে তৈরি করাই আমাদের প্রতিশ্রুতি।
                                আমরা চেষ্টা করি বাজেট ফ্রেন্ডলি দামে সেরা কোয়ালিটি দিতে।
                                কাস্টমারের প্রয়োজন অনুযায়ী সম্পূর্ণ কাস্টমাইজেশন নিশ্চিত করি।
                                প্রতিটি কাজের ক্ষেত্রে আমরা গুরুত্ব দিই ডিটেইলিং এবং ফিনিশিং-এ।
                                আমাদের লক্ষ্য শুধু বিক্রি নয়, দীর্ঘমেয়াদী সম্পর্ক তৈরি করা।
                                ডেলিভারির পরেও আমরা সার্ভিস ও সাপোর্ট দিয়ে পাশে থাকি।
                                DreamLux এর লক্ষ্য—আপনার ঘরে স্বাচ্ছন্দ্য, স্টাইল এবং সন্তুষ্টি আনা।
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className="grid grid-cols-2 gap-4">

                            <Image
                                src="/compare/compare-4.jpg"
                                alt="DreamLux Furniture"
                                width={400}
                                height={300}
                                className="rounded-xl shadow-md hover:scale-105 transition duration-500"
                            />

                            <Image
                                src="/compare/compare-15.jpg"
                                alt="DreamLux Furniture"
                                width={400}
                                height={300}
                                className="rounded-xl shadow-md hover:scale-105 transition duration-500"
                            />

                            <Image
                                src="/compare/compare-16.jpg"
                                alt="DreamLux Furniture"
                                width={400}
                                height={300}
                                className="rounded-xl shadow-md hover:scale-105 transition duration-500"
                            />

                            <Image
                                src="/compare/compare-13.jpg"
                                alt="DreamLux Furniture"
                                width={400}
                                height={300}
                                className="rounded-xl shadow-md hover:scale-105 transition duration-500"
                            />

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutPage