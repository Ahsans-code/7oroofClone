import { Facebook, Twitter, Instagram } from "lucide-react";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1D2A4D] text-white py-16 font-['Roboto',sans-serif]">
      <div className="container mx-[40px] px-4 flex flex-col md:flex-row justify-between gap-2">
        {/* Left side content */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 mt-[50px]">
          {/* Logo and Description Section */}
          <div className="mb-8">
            <div className="mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OHqtSKUKiPZAfrNW6pLmM4hWFkcYgG.png"
                alt="Logo"
                className="w-48"
              />
            </div>
            <div >
              <p className="text-gray-300 text-[12px] leading-relaxed mb-6 font-bold">
                Our goal is to deliver quality of care in a courteous,
                respectful, and compassionate manner. We hope you will allow us
                to care for you and strive to be the first and best choice for
                your family healthcare.
              </p>
            </div>
            <a
              href="/appointment"
              className="inline-flex items-center text-[#22D3AA] hover:text-[#1ab090] transition-colors text-lg"
            >
              Make Appointment →
            </a>
          </div>

          {/* Departments Section */}
          <div className="ml-14">
            <h3 className="text-[22px] font-bold mb-8">Departments</h3>
            <ul className="space-y-2 text-[#A4B6C6] text-[15px]">
              <li>
                <a
                  href="/neurology"
                  className="hover:text-white transition-colors"
                >
                  Neurology Clinic
                </a>
              </li>
              <li>
                <a
                  href="/cardiology"
                  className="hover:text-white transition-colors"
                >
                  Cardiology Clinic
                </a>
              </li>
              <li>
                <a
                  href="/pathology"
                  className="hover:text-white transition-colors"
                >
                  Pathology Clinic
                </a>
              </li>
              <li>
                <a
                  href="/laboratory"
                  className="hover:text-white transition-colors"
                >
                  Laboratory Analysis
                </a>
              </li>
              <li>
                <a
                  href="/pediatric"
                  className="hover:text-white transition-colors"
                >
                  Pediatric Clinic
                </a>
              </li>
              <li>
                <a
                  href="/cardiac"
                  className="hover:text-white transition-colors"
                >
                  Cardiac Clinic
                </a>
              </li>
            </ul>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-[22px] font-bold mb-8">Links</h3>
            <ul className="space-y-2 text-[#A4B6C6] text-[15px]">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/clinic"
                  className="hover:text-white transition-colors"
                >
                  Our Clinic
                </a>
              </li>
              <li>
                <a
                  href="/doctors"
                  className="hover:text-white transition-colors"
                >
                  Our Doctors
                </a>
              </li>
              <li>
                <a href="/news" className="hover:text-white transition-colors">
                  News & Media
                </a>
              </li>
              <li>
                <a
                  href="/appointments"
                  className="hover:text-white transition-colors"
                >
                  Appointments
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Contacts Section */}
        <div className="md:w-[350px] lg:w-[400px] mr-[40px]">
          <div className="bg-white text-gray-800 p-6 rounded-[20px] shadow-lg relative overflow-hidden h-full border-l-4 border-[#22D3AA]">
            <div className="relative z-10">
              <h3 className="text-[#1B224B] text-[20px] font-bold mb-4">
                Quick Contacts
              </h3>
              <p className="text-[#64748B] text-[14px] leading-relaxed mb-6">
                If you have any questions or need help, feel free to contact
                with our team.
              </p>
              <a
                href="tel:01061245741"
                className="text-[#3958a0] text-[24px] font-bold mb-4 transition-colors flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#3958a0"
                  stroke=""
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                01061245741
              </a>
              <p className="text-[#64748B] text-[14px] leading-relaxed mb-6">
                2307 Beverley Rd Brooklyn, New York 11226 United States.
              </p>
              <div className="flex items-center justify-between">
                <a
                  href="/directions"
                  className="text-[#22D3AA] hover:text-[#1ab090] transition-colors flex items-center gap-1 text-[14px] font-medium"
                >
                  Get Directions
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="bg-[#1B224B] text-white p-2 rounded-full hover:bg-[#22D3AA] transition-colors"
                  >
                    <Facebook className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#"
                    className="bg-[#1B224B] text-white p-2 rounded-full hover:bg-[#22D3AA] transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#"
                    className="bg-[#1B224B] text-white p-2 rounded-full hover:bg-[#22D3AA] transition-colors"
                  >
                    <Twitter className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
