import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { FaFacebookF, FaTwitter, FaPhone } from "react-icons/fa";

const DoctorCard = ({ doctor }) => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 750);

  useEffect(() => {
    // Update screen width on resize
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 750);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`h-full bg-white shadow-lg rounded-lg overflow-hidden hover:drop-shadow-2xl transition-shadow duration-300 relative group ${
        isWideScreen ? "ml-5 pr-5" : ""
      }`}
    >
      <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
        <img
          src={doctor.image || "/placeholder.svg"}
          alt={doctor.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 lg:p-8">
        <h3 className="text-xl font-semibold text-[#0A2472] mb-2 lg:mb-3 hover:text-emerald-500">
          {doctor.name}
        </h3>
        <p className="text-emerald-500 font-medium mb-3 lg:mb-4">
          {doctor.title}
        </p>
        <p
          className="mb-4 lg:mb-6"
          style={{
            fontFamily: "Roboto, sans-serif",
            fontSize: "15px",
            fontWeight: 400,
            lineHeight: "26.25px",
            color: "rgb(132, 142, 159)",
          }}
        >
          {doctor.bio}
        </p>

        {/* Button and Icons in the Same Line */}
        <div className="flex items-center justify-between">
          {/* Button */}
          <button className="flex items-center justify-center py-2 px-4 rounded-full transition-colors duration-300 group-hover:bg-[#0A2472] group-hover:text-white bg-transparent text-[#0A2472] hover:bg-emerald-500 hover:text-white">
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </button>

          {/* Icons: Hidden by Default, Visible on Hover */}
          <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-[#0A2472] text-white p-3 rounded-full hover:bg-black transition-colors duration-300">
              <FaFacebookF />
            </div>
            <div className="bg-[#0A2472] text-white p-3 rounded-full hover:bg-black transition-colors duration-300">
              <FaTwitter />
            </div>
            <div className="bg-[#0A2472] text-white p-3 rounded-full hover:bg-black transition-colors duration-300 transform group-hover:rotate-90">
              <FaPhone />
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="h-1 w-full bg-transparent mt-4 group-hover:bg-emerald-500 transition-all duration-300"></div>
      </div>
    </div>
  );
};

export default DoctorCard;
