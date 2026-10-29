
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const categories = [
    "All",
    "Bed",
    "Bedroom Set",
    "Almira",
    "Cabinet",
    "Dining Table",
    "Sofa",
    "Dressing Table",
];

function GelleryDisplay({ gallerys = [] }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const [selectedImage, setSelectedImage] = useState(null);
    const dialogRef = useRef(null);

    const categoryFromUrl = searchParams.get("category");

    const selectedCategory =
        categories.find(
            (category) =>
                category.toLowerCase() === categoryFromUrl?.toLowerCase()
        ) || "All";

    const filteredGallery =
        selectedCategory === "All"
            ? gallerys
            : gallerys.filter(
                  (gallery) =>
                      gallery.category?.toLowerCase() ===
                      selectedCategory.toLowerCase()
              );

    const handleCategoryChange = (category) => {
        const params = new URLSearchParams(searchParams.toString());

        if (category === "All") {
            params.delete("category");
        } else {
            params.set("category", category.toLowerCase());
        }

        const query = params.toString();

        router.replace(query ? `${pathname}?${query}` : pathname, {
            scroll: false,
        });
    };

    const openModal = (image) => {
        setSelectedImage(image);
        dialogRef.current?.showModal();
    };

    return (
        <div>
            {/* Category Filter */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 px-3">
                {categories.map((category) => (
                    <button
                        key={category}
                        type="button"
                        onClick={() => handleCategoryChange(category)}
                        aria-pressed={selectedCategory === category}
                        className={`rounded-lg border px-4 py-2 text-sm font-semibold transition duration-300 ${
                            selectedCategory === category
                                ? "border-[#0E6B66] bg-[#0E6B66] text-white shadow-md"
                                : "border-[#0E6B66]/30 bg-white text-[#0E6B66] hover:bg-[#0E6B66] hover:text-white"
                        }`}
                    >
                        {category === "All" ? "সবগুলো" : category}
                    </button>
                ))}
            </div>

            {/* Gallery Grid */}
            <div className="mt-6 grid grid-cols-2 gap-2 px-2 lg:grid-cols-4">
                {filteredGallery.length > 0 ? (
                    filteredGallery.map((gallery) => (
                        <button
                            key={gallery.id}
                            type="button"
                            aria-label={`ছবি বড় করে দেখুন: ${
                                gallery.title || gallery.category || "Furniture"
                            }`}
                            className="group relative overflow-hidden rounded-xl border border-gray-200 text-left"
                            onClick={() => openModal(gallery.image)}
                        >
                            <Image
                                src={gallery.image}
                                alt={
                                    gallery.title ||
                                    gallery.category ||
                                    "DreamLux Furniture"
                                }
                                width={800}
                                height={600}
                                className="h-auto w-full transition duration-500 group-hover:scale-110"
                            />

                            <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition duration-300 lg:bg-black/30 lg:opacity-0 lg:group-hover:opacity-100">
                                <span className="flex items-center justify-center rounded-md bg-[#0E6B66] p-2 text-white shadow-lg">
                                    <FaEye className="text-xl" />
                                </span>
                            </span>
                        </button>
                    ))
                ) : (
                    <p className="col-span-full py-10 text-center text-gray-500">
                        এই ক্যাটাগরিতে কোনো ছবি পাওয়া যায়নি।
                    </p>
                )}
            </div>

            {/* Image Preview Modal */}
            <dialog
                ref={dialogRef}
                className="modal"
                aria-label="Furniture image preview"
            >
                <div className="modal-box relative max-h-[90vh] max-w-4xl overflow-auto bg-white p-2">
                    <form method="dialog">
                        <button
                            type="submit"
                            aria-label="বন্ধ করুন"
                            className="btn btn-circle btn-sm absolute right-3 top-3 z-10 border-none bg-[#0E6B66] text-white"
                        >
                            ✕
                        </button>
                    </form>

                    {selectedImage && (
                        <Image
                            src={selectedImage}
                            alt="DreamLux Furniture Preview"
                            width={1200}
                            height={900}
                            className="h-auto w-full rounded-lg"
                        />
                    )}
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button type="submit" aria-label="বন্ধ করুন">
                        Close
                    </button>
                </form>
            </dialog>
        </div>
    );
}

export default GelleryDisplay;
