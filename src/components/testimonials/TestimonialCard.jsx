import Image from 'next/image'
import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialCard({ t, openModal }) {
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