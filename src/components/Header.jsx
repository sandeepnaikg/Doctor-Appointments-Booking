
import React from "react";
import Group from "../assets/group_profiles.png";
import Arrow from "../assets/arrow_icon.svg";
import HeaderImg from "../assets/header_img.png";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap rounded-lg  mt-6 create-btn px-6 md:px-10 lg:px-13 py-5.5 min-h-[78vh]">
      {/* Left side of the header */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <h1 className="text-5xl md:text-4xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment With Trusted Doctors
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 text-white text-sm font-light">
          <img className="w-30" src={Group} />
          Simply browse through our extensive list of trusted doctors, and
          schedule your appointments hassle-free.
        </div>
        <a href="#speciality" className="flex items-center gap-3 bg-white rounded-full px-8 py-3 text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition duration-300 cursor-pointer">
          Book Appointments
          <img src={Arrow} alt="Arrow Icon" className="w-4" />
        </a>
      </div>

      {/* Right side of the header */}
      <div className="md:w-1/2 relative">
        <img
          src={HeaderImg}
          alt="Header Illustration"
          className="w-full md:absolute bottom-[-4.8%] h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Header;
