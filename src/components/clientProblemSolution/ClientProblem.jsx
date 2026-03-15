import React from 'react'
import SectionTitle from '../shared/sectionTitle/SectionTitle'
import { FaExclamationCircle, FaTools, FaArrowRight } from "react-icons/fa";

function ClientProblem() {

    const data = [
        {
            problem: "ড্রয়ার ঠিকমতো বন্ধ হচ্ছিল না ড্রয়ার ঠিকমতো বন্ধ হচ্ছিল নাড্রয়ার ঠিকমতো বন্ধ হচ্ছিল নাড্রয়ার ঠিকমতো বন্ধ হচ্ছিল নাড্রয়ার ঠিকমতো বন্ধ হচ্ছিল না",
            solution: "আমাদের টেকনিশিয়ান গিয়ে স্লাইডার ঠিক করে দিয়েছে",
        },
        {
            problem: "ডেলিভারির পর ছোট একটা স্ক্র্যাচ দেখা গেছে",
            solution: "আমরা দ্রুত রিপ্লেসমেন্ট প্যানেল দিয়ে সমস্যাটি সমাধান করেছি",
        },
        {
            problem: "বেডের সাইজ ঘরের সাথে পুরোপুরি ম্যাচ হচ্ছিল না",
            solution: "আমরা কাস্টমাইজ করে নতুন সাইজে সেট করে দিয়েছি",
        },
    ];

    return (
        <div>
            <SectionTitle title="Client Problem & solution" subTitle="কাস্টমারের সমস্যা & সমাধান" width='lg:w-1/2 w-full'></SectionTitle>
            <div className="mt-16">
                <div className="mt-10 space-y-8">

                    {data.map((item, index) => (
                        <div key={index} className="grid md:grid-cols-3 gap-4 items-center">

                            {/* Problem */}
                            <div>
                                <p className="text-sm text-gray-500 mb-2 font-semibold">
                                    সমস্যা
                                </p>

                                <div className="bg-red-50 border border-red-200 rounded-xl p-6 flex gap-3 items-start">
                                    <FaExclamationCircle className="text-red-500 text-xl mt-1" />
                                    <p className="text-gray-700">{item.problem}</p>
                                </div>
                            </div>

                            {/* Arrow */}
                            <div className="flex justify-center">
                                <FaArrowRight className="text-[#0E6B66] text-2xl hidden md:block" />
                            </div>

                            {/* Solution */}
                            <div>
                                <p className="text-sm text-gray-500 mb-2 font-semibold">
                                    সমাধান
                                </p>

                                <div className="bg-green-50 border border-green-200 rounded-xl p-6 flex gap-3 items-start">
                                    <FaTools className="text-green-600 text-xl mt-1" />
                                    <p className="text-gray-700">{item.solution}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ClientProblem