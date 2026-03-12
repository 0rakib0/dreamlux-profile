'use client'
import React from 'react'
import { FaUsers, FaCheckCircle, FaPencilRuler, FaAward } from "react-icons/fa";
import CountUp from "react-countup";
function State() {
    return (
        <div>
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 border border-[#0E6B66] rounded-b-md shadow-lg">

                <div className="stat flex justify-center items-center gap-4 hover:scale-105 transition-transform duration-300">
                    <FaUsers className="text-4xl text-[#0E6B66]" />
                    <div>
                        <div className="stat-value text-2xl font-bold">
                            <CountUp start={0} end={200} duration={2} suffix="+" />
                        </div>
                        <div className="stat-title">Happy Clients</div>
                    </div>
                </div>

                <div className="stat flex justify-center items-center gap-4 hover:scale-105 transition-transform duration-300">
                    <FaCheckCircle className="text-4xl text-[#0E6B66]" />
                    <div>
                        <div className="stat-value text-2xl font-bold">
                            <CountUp start={0} end={200} duration={2} suffix="+" />
                        </div>
                        <div className="stat-title">Project Done</div>
                    </div>
                </div>

                <div className="stat flex justify-center items-center gap-4 hover:scale-105 transition-transform duration-300">
                    <FaPencilRuler className="text-4xl text-[#0E6B66]" />
                    <div>
                        <div className="stat-value text-2xl font-bold">
                            <CountUp start={0} end={200} duration={2} suffix="+" />
                        </div>
                        <div className="stat-title">Custom Designs</div>
                    </div>
                </div>

                <div className="stat flex justify-center items-center gap-4 hover:scale-105 transition-transform duration-300">
                    <FaAward className="text-4xl text-[#0E6B66]" />
                    <div>
                        <div className="stat-value text-2xl font-bold">
                            <CountUp start={0} end={5} duration={2} suffix="+" />
                        </div>
                        <div className="stat-title">Years Experience</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default State