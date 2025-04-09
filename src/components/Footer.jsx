import React from "react";
import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="md:mx-10">
      {/* left section*/}
      <div className="flex flex-col  sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 my-10 text-sm">
        <div>
          <img  className="mb-5 w-40" src={Logo} />
          <p className="text-gray-600 w-full md:w-2/2 leading-6">
          Easily schedule and manage your appointments with our platform. Choose a time, confirm your booking, and get reminders, all while keeping your schedule organized and hassle-free.
          </p>
        </div>
        {/* center section*/}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* right section*/}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600 cursor-pointer">
            <li>+919652297686</li>
            <li>gugulothsandeepnaik82@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* bottom section*/}
      <div>
        <hr />
        <p className="text-center text-sm py-5">Copyright 2024@ Prescripto -All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
