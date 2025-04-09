import React from "react";
import AppointImg from "../assets/appointment_img.png";

import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="flex create-btn rounded-lg px-6 sm:px-10 py-6 md:px-14lg:px-12 my-12 md:mx:10">
      {/* left side banner*/}
      <div className="flex-1 py-8 sm:py-10 md:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
          <p>Book an appointment </p>
          <p className="mt-4">With 100+ trusted Doctors</p>
        </div>
        <button
          className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all cursor-pointer"
          onClick={() => {
            navigate("/login");
            window.scrollTo(0, 0);
          }}
        >
          Create Account
        </button>
      </div>
      {/* right side banner*/}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
      <img
          src={AppointImg}
          className="w-full bottom-[-6.8%] absolute right-0 max-w-md"
        />
      </div>
    </div>
  );
};

export default Banner;
