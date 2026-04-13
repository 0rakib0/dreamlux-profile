import React from 'react'
import { FaCouch } from "react-icons/fa";
function SectionTitle({title, subTitle, width}) {
    return (
        <div>
            <div className={`mt-12 ${width} mx-auto text-center border border-[#0E6B66] relative`}>
                <FaCouch className="text-[#0E6B66] text-6xl absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full" />
                <h1 className='p-4 text-xl font-semibold tracking-wide text-[#0b5a55]'>{title}</h1>
                <p className='text-[#0E6B66] absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white rounded-full'>{subTitle}</p>
            </div>
        </div>
    )
}

export default SectionTitle