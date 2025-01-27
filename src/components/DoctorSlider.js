import { useState, useEffect } from "react";
import DoctorCard from "./DoctorCard";
import { doctors } from "../data/doctor";

const DoctorsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        isWideScreen
          ? (prevIndex + 1) % (doctors.length - 2)
          : (prevIndex + 1) % doctors.length
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [isWideScreen]);

  return (
    <div className="w-full overflow-hidden bg-white py-5 ">
      <div className="max-w-7xl mx-auto text-center mb-12 px-4">
        <h2 className="text-[2.5rem] font-semibold text-[#0A2472] mb-4">
          Meet Our Doctors
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Our administration and support staff all have exceptional people
          skills and are trained to assist you with all medical enquiries.
        </p>
      </div>

      <div
        className={`${
          isWideScreen ? "relative max-w-7xl" : "relative max-w-7xl mx-auto"
        }`}
      >
        <div
          className="transition-transform duration-500 ease-in-out flex gap-6"
          style={{
            transform: `translateX(-${
              currentIndex * (isWideScreen ? 35 : 106)
            }%)`,
          }}
        >
          {doctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className={`flex-shrink-0 ${
                isWideScreen ? "w-1/3" : "w-full"
              } transition-opacity duration-500`}
            >
              <DoctorCard doctor={doctor} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsSlider;
