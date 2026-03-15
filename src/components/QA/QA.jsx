import React from 'react'
import SectionTitle from '../shared/sectionTitle/SectionTitle';

function QA() {
    const faqs = [
        {
            question: "আপনারা কি কাস্টম ডিজাইনের ফার্নিচার তৈরি করেন?",
            answer:
                "জি, আমরা কাস্টমারদের প্রয়োজন অনুযায়ী বেড, সোফা, আলমারি সহ বিভিন্ন ফার্নিচার কাস্টম ডিজাইনে তৈরি করি।",
        },
        {
            question: "ডেলিভারি কত দিনের মধ্যে পাওয়া যাবে?",
            answer:
                "সাধারণত ৭-১০ দিনের মধ্যে প্রোডাক্ট ডেলিভারি দেওয়া হয়। কাস্টম অর্ডারের ক্ষেত্রে সময় কিছুটা বেশি লাগতে পারে।",
        },
        {
            question: "ডেলিভারির পরে কোন সমস্যা হলে কি করবেন?",
            answer:
                "আমাদের টিম দ্রুত সমস্যাটি সমাধান করার চেষ্টা করবে। প্রয়োজনে টেকনিশিয়ান পাঠানো হবে।",
        },
        {
            question: "আপনারা কি সারা বাংলাদেশে ডেলিভারি দেন?",
            answer:
                "জি, আমরা কুরিয়ার বা নিজস্ব ডেলিভারি টিমের মাধ্যমে সারা বাংলাদেশে ডেলিভারি দিয়ে থাকি।",
        },
    ];
    return (
        <div className="mt-20">

            {/* Title */}
            <SectionTitle title="Delivery Product Gallery" subTitle="ডেলিভারি প্রোডাক্ট" width='lg:w-1/4 w-full'></SectionTitle>

            {/* FAQ */}
            <div className="max-w-3xl mx-auto space-y-4 mt-6 pb-6">

                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        tabIndex={0}
                        className="collapse collapse-plus bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
                    >
                        <div className="collapse-title font-semibold text-lg text-[#0E6B66]">
                            {faq.question}
                        </div>

                        <div className="collapse-content text-gray-600 text-sm leading-relaxed">
                            {faq.answer}
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default QA