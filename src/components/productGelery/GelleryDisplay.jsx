"use client"
import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import Image from 'next/image'
function GelleryDisplay({gallerys}) {
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <div>
            
            <div className='mt-6 grid grid-cols-2 lg:grid-cols-4 gap-2'>
                {gallerys.map((gallery) => (
                    <div key={gallery.id}
                        className="group relative overflow-hidden rounded-xl border border-gray-200 cursor-pointer"
                        onClick={() => {
                            setSelectedImage(gallery.image);
                            document.getElementById("gallery").showModal();
                        }}
                    >
                        <Image
                            src={gallery.image}
                            alt="Luxury Bed"
                            width={800}
                            height={600}
                            className="w-full h-auto transition duration-500 group-hover:scale-110"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center 
                            opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition duration-300">

                            <button className="flex bg-[#0E6B66] items-center gap-2 px-2 text-white text-sm font-semibold rounded-md shadow-lg hover:bg-[#095a55] transition">
                                <FaEye className='text-xl'></FaEye>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* product gelerry modal */}
            <dialog id="gallery" className="modal">
                <div className="modal-box p-0 border-none shadow-none">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    {selectedImage && (
                        <Image
                            src={selectedImage}
                            alt="Luxury Bed"
                            width={800}
                            height={600}
                            className="w-full h-auto"
                        />
                    )}

                </div>
            </dialog>
        </div>
    )
}

export default GelleryDisplay