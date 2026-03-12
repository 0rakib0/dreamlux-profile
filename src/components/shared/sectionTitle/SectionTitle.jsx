import React from 'react'
import { FaCouch } from "react-icons/fa";
function SectionTitle() {
    return (
        <div>
            <div className='w-1/4 text-center border border-[#0E6B66] relative'>
                <FaCouch className="text-[#0E6B66] text-6xl absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full" />
                <h1 className='p-4 text-xl font-bold'>About Our Company</h1>
                <p className='text-[#0E6B66] absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white rounded-full'>কোম্পানি সম্পর্কে জানুন</p>
            </div>
        </div>
    )
}

export default SectionTitle