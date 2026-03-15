'use client'
import React, { useState } from 'react'
import SectionTitle from '../shared/sectionTitle/SectionTitle'
import { FaEye } from "react-icons/fa";
import Image from 'next/image'
import useProjects from '@/hooks/useProjects';
function Projects() {
    const projects = useProjects()
    const [selectedImage, setSelectedImage] = useState(null);


    return (
        <div>
            <SectionTitle title="Complated Projects" subTitle="সম্পন্ন করা প্রজেক্ট" width='lg:w-2/4 w-full'></SectionTitle>

            <div className='mt-6 grid grid-cols-2 lg:grid-cols-4 gap-2'>
                {projects.slice(0, 8).map((project) => (
                    <div key={project.id}
                        className="group relative overflow-hidden rounded-xl border border-gray-200 cursor-pointer transition hover:shadow-xl"
                        onClick={() => {
                            setSelectedImage(project);
                            document.getElementById("projects").showModal();
                        }}
                    >

                        {/* Image */}
                        <Image
                            src={project.image}
                            alt="Luxury Bed"
                            width={800}
                            height={600}
                            className="w-full h-auto transition duration-500 group-hover:scale-110"
                        />

                        {/* Category Badge */}
                        <span className="absolute top-3 left-3 bg-[#0E6B66] text-white text-xs px-3 py-1 rounded-full shadow">
                            {project.category}
                        </span>

                        {/* Overlay Button */}
                        <div className="absolute inset-0 flex items-center justify-center 
                                            opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition duration-300">

                            <button className="flex bg-white items-center gap-2 px-2 text-[#095a55] text-sm font-semibold rounded-md shadow-lg transition">
                                <FaEye className='text-xl'></FaEye>
                            </button>
                        </div>

                        {/* Card Info */}
                        <div className="p-4 bg-white">

                            <h4 className="font-semibold text-lg mb-1 text-[#095a55]">
                                {project.title}
                            </h4>

                            <div className="flex justify-between text-sm text-gray-500">

                                <span>📍{project.location}</span>

                                <span>{project.year}</span>

                            </div>

                        </div>

                    </div>
                ))}


            </div>
            <button className='block mx-auto bg-[#0E6B66] text-white py-3 mt-4 px-6 rounded-sm icon-shadow'>
                সবগুলো দেখুন
            </button>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="projects" className="modal">
                <div className="modal-box p-0 border-none shadow-none">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    {selectedImage && (<>
                        <Image
                            src={selectedImage.image}
                            alt="Luxury Bed"
                            width={800}
                            height={600}
                            className="w-full h-auto"
                        />
                        <div className='px-2'>
                            <h2 className="text-2xl font-bold mb-2 text-[#095a55]">{selectedImage?.title}</h2>

                            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                                <span className="flex items-center gap-1">📂 {selectedImage?.category}</span>
                                <span className="flex items-center gap-1">📍 {selectedImage?.location}</span>
                                <span className="flex items-center gap-1">🗓️ {selectedImage?.year}</span>
                            </div>
                        </div>
                    </>

                    )}

                </div>
            </dialog>
        </div>
    )
}

export default Projects