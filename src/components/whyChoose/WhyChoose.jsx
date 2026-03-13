import React from 'react'
import SectionTitle from '../shared/sectionTitle/SectionTitle'
import { FaPencilRuler, FaCubes, FaTools, FaTruck, FaHeadset, FaStar, FaSmile, FaShieldAlt } from "react-icons/fa";
function WhyChoose() {
    return (
        <div>
            <SectionTitle title="Why Choose Us" subTitle="আমাদের সার্ভিস" width='lg:w-1/4 w-full'></SectionTitle>
            <div className='mt-6 grid grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className="group p-6 rounded-xl border border-gray-200 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-[#0E6B66]/5">

                    <div className="flex justify-center mb-4">
                        <div className="bg-[#0E6B66]/10 p-4 rounded-full transition-all duration-300 group-hover:bg-[#0E6B66]">
                            <FaPencilRuler className="text-3xl text-[#0E6B66] transition-all duration-300 group-hover:text-white group-hover:rotate-12 group-hover:scale-110" />
                        </div>
                    </div>

                    <h4 className="text-xl font-semibold mb-2">
                        কাস্টম ডিজাইন ফার্নিচার
                    </h4>

                    <p className="text-gray-600 text-sm leading-relaxed">
                        কাস্টমারের প্রয়োজন ও ঘরের স্পেস অনুযায়ী সম্পূর্ণ কাস্টমাইজ ফার্নিচার ডিজাইন।
                    </p>

                </div>

                <div className="group p-6 rounded-xl border border-gray-200 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-[#0E6B66]/5">

                    <div className="flex justify-center mb-4">
                        <div className="bg-[#0E6B66]/10 p-4 rounded-full transition-all duration-300 group-hover:bg-[#0E6B66]">
                            <FaCubes className="text-3xl text-[#0E6B66] transition-all duration-300 group-hover:text-white group-hover:rotate-12 group-hover:scale-110" />
                        </div>
                    </div>

                    <h4 className="text-xl font-semibold mb-2">
                        উন্নত মানের উপকরণ
                    </h4>

                    <p className="text-gray-600 text-sm leading-relaxed">
                        দীর্ঘদিন টেকসই রাখার জন্য আমরা ব্যবহার করি উচ্চমানের কাঠ ও মেটেরিয়াল।
                    </p>

                </div>

                <div className="group p-6 rounded-xl border border-gray-200 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-[#0E6B66]/5">

                    <div className="flex justify-center mb-4">
                        <div className="bg-[#0E6B66]/10 p-4 rounded-full transition-all duration-300 group-hover:bg-[#0E6B66]">
                            <FaTools className="text-3xl text-[#0E6B66] transition-all duration-300 group-hover:text-white group-hover:rotate-12 group-hover:scale-110" />
                        </div>
                    </div>

                    <h4 className="text-xl font-semibold mb-2">
                        দক্ষ কারিগর
                    </h4>

                    <p className="text-gray-600 text-sm leading-relaxed">
                        আমাদের অভিজ্ঞ কারিগররা প্রতিটি ফার্নিচার যত্ন সহকারে তৈরি করেন।
                    </p>

                </div>

                <div className="group p-6 rounded-xl border border-gray-200 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-[#0E6B66]/5">

                    <div className="flex justify-center mb-4">
                        <div className="bg-[#0E6B66]/10 p-4 rounded-full transition-all duration-300 group-hover:bg-[#0E6B66]">
                            <FaTruck className="text-3xl text-[#0E6B66] transition-all duration-300 group-hover:text-white group-hover:rotate-12 group-hover:scale-110" />
                        </div>
                    </div>

                    <h4 className="text-xl font-semibold mb-2">
                        সময়মতো ডেলিভারি
                    </h4>

                    <p className="text-gray-600 text-sm leading-relaxed">
                        নির্ধারিত সময়ের মধ্যে ফার্নিচার ডেলিভারি দেওয়ার প্রতিশ্রুতি।
                    </p>

                </div>

                <div className="group p-6 rounded-xl border border-gray-200 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-[#0E6B66]/5">

                    <div className="flex justify-center mb-4">
                        <div className="bg-[#0E6B66]/10 p-4 rounded-full transition-all duration-300 group-hover:bg-[#0E6B66]">
                            <FaHeadset className="text-3xl text-[#0E6B66] transition-all duration-300 group-hover:text-white group-hover:rotate-12 group-hover:scale-110" />
                        </div>
                    </div>

                    <h4 className="text-xl font-semibold mb-2">
                        ডেলিভারির পর সাপোর্ট
                    </h4>

                    <p className="text-gray-600 text-sm leading-relaxed">
                        প্রয়োজনে আমরা ডেলিভারির পরেও সাপোর্ট ও সার্ভিস দিয়ে থাকি।
                    </p>

                </div>

                <div className="group p-6 rounded-xl border border-gray-200 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-[#0E6B66]/5">

                    <div className="flex justify-center mb-4">
                        <div className="bg-[#0E6B66]/10 p-4 rounded-full transition-all duration-300 group-hover:bg-[#0E6B66]">
                            <FaStar className="text-3xl text-[#0E6B66] transition-all duration-300 group-hover:text-white group-hover:rotate-12 group-hover:scale-110" />
                        </div>
                    </div>

                    <h4 className="text-xl font-semibold mb-2">
                        ইউনিক ও আধুনিক ডিজাইন
                    </h4>

                    <p className="text-gray-600 text-sm leading-relaxed">
                        প্রতিটি ফার্নিচার ডিজাইন করা হয় আধুনিক ও নান্দনিক স্টাইলে।
                    </p>

                </div>

                <div className="group p-6 rounded-xl border border-gray-200 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-[#0E6B66]/5">

                    <div className="flex justify-center mb-4">
                        <div className="bg-[#0E6B66]/10 p-4 rounded-full transition-all duration-300 group-hover:bg-[#0E6B66]">
                            <FaSmile className="text-3xl text-[#0E6B66] transition-all duration-300 group-hover:text-white group-hover:rotate-12 group-hover:scale-110" />
                        </div>
                    </div>

                    <h4 className="text-xl font-semibold mb-2">
                        গ্রাহক সন্তুষ্টিই আমাদের লক্ষ্য
                    </h4>

                    <p className="text-gray-600 text-sm leading-relaxed">
                        আমাদের প্রতিটি কাজের মূল উদ্দেশ্য হলো গ্রাহকের সন্তুষ্টি নিশ্চিত করা।
                    </p>

                </div>

                <div className="group p-6 rounded-xl border border-gray-200 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-[#0E6B66]/5">

                    <div className="flex justify-center mb-4">
                        <div className="bg-[#0E6B66]/10 p-4 rounded-full transition-all duration-300 group-hover:bg-[#0E6B66]">
                            <FaShieldAlt className="text-3xl text-[#0E6B66] transition-all duration-300 group-hover:text-white group-hover:rotate-12 group-hover:scale-110" />
                        </div>
                    </div>

                    <h4 className="text-xl font-semibold mb-2">
                        নির্ভরযোগ্য সার্ভিস
                    </h4>

                    <p className="text-gray-600 text-sm leading-relaxed">
                        অর্ডার থেকে ডেলিভারি পর্যন্ত প্রতিটি ধাপে আমরা নির্ভরযোগ্য সেবা প্রদান করি।
                    </p>

                </div>
            </div>
        </div>
    )
}

export default WhyChoose