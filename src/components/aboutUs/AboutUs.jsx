import React from 'react'
import SectionTitle from '../shared/sectionTitle/SectionTitle'
import Image from 'next/image'
function AboutUs() {
    return (
        <div className="flex lg:flex-row flex-col flex-col-reverse gap-8">
            {/* Image Section */}
            <div className="w-full">
                <Image
                    src="/aboutUs.png"
                    alt="DreamLux Logo"
                    width={100}
                    height={100}
                    className="w-full h-auto"
                />
            </div>

            {/* Text Section */}
            <div className="w-full">
                <SectionTitle />
                <p className="mt-4 text-lg text-justify text-gray-700">
                    DreamLux হলো একটি প্রিমিয়াম কাস্টম ফার্নিচার ব্র্যান্ড, যা প্রতিটি কাস্টমারের স্বপ্নের ঘর সাজানোর লক্ষ্য নিয়ে কাজ করে। আমরা শুধু ফার্নিচার তৈরি করি না, বরং প্রতিটি টুকরোকে কাস্টমাইজ করি কাস্টমারের প্রয়োজন, স্থান এবং রুচি অনুযায়ী।

                    আমাদের মূল লক্ষ্য হলো গ্রাহকের স্বাচ্ছন্দ্য ও সন্তুষ্টি নিশ্চিত করা। আমরা বুঝি প্রতিটি বাড়ি আলাদা, তাই আমাদের প্রতিটি ডিজাইন অনন্য এবং ফাংশনাল হতে হবে। আমাদের টিম প্রতিটি প্রোজেক্টে গুরুত্ব দেয় ডিটেইল, মান এবং সৃজনশীলতা।

                    DreamLux শুধু ফার্নিচার বিক্রি করে না, আমরা সেবা প্রদান করি। আমাদের কাজের মূলনীতি হলো গ্রাহকের স্বপ্নকে বাস্তবে রূপান্তর করা। তাই আমাদের কাস্টমাররা কেবল ফার্নিচারই পায় না, বরং একটি সৃজনশীল এবং আরামদায়ক অভিজ্ঞতা।
                </p>
            </div>
        </div>
    )
}

export default AboutUs