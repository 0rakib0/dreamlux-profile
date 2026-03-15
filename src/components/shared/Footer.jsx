import React from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function FooterSec() {
  return (
    <footer className="bg-[#0E6B66] text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">DreamLux</h2>

          <p className="text-sm text-gray-200 leading-relaxed">
            DreamLux আপনাদের জন্য নিয়ে এসেছে আধুনিক ও মানসম্মত
            কাস্টম ফার্নিচার। আপনার ঘরকে আরও সুন্দর ও আরামদায়ক
            করে তুলতে আমরা প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>


        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-sm">
            <li className="hover:translate-x-1 transition cursor-pointer">Home</li>
            <li className="hover:translate-x-1 transition cursor-pointer">Gallery</li>
            <li className="hover:translate-x-1 transition cursor-pointer">Projects</li>
            <li className="hover:translate-x-1 transition cursor-pointer">Reviews</li>
            <li className="hover:translate-x-1 transition cursor-pointer">Contact</li>
          </ul>
        </div>


        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <ul className="space-y-2 text-sm text-gray-200">
            <li>📍 Kaliganj, Bangladesh</li>
            <li>📞 +880 1XXXXXXXXX</li>
            <li>✉️ dreamlux@gmail.com</li>
          </ul>
        </div>


        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-4">

            <div className="bg-white text-[#0E6B66] p-2 rounded-full cursor-pointer hover:scale-110 transition">
              <FaFacebookF />
            </div>

            <div className="bg-white text-[#0E6B66] p-2 rounded-full cursor-pointer hover:scale-110 transition">
              <FaInstagram />
            </div>

            <div className="bg-white text-[#0E6B66] p-2 rounded-full cursor-pointer hover:scale-110 transition">
              <FaWhatsapp />
            </div>

          </div>
        </div>

      </div>


      {/* Bottom */}
      <div className="border-t border-[#ffffff33] text-center py-4 text-sm text-gray-200">
        © {new Date().getFullYear()} DreamLux Furnished. All Rights Reserved.
      </div>

    </footer>
  )
}

export default FooterSec