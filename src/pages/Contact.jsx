import React from "react";
import ContactImg from "../assets/contact_image.png";

const Contact = () => {
  return (
    <>
      <div>
        <div className="text-center text-2xl text-gray-500 pt-10 ">
          <p>
            CONTACT <span className="text-gray-700 font-semibold">US</span>
          </p>
        </div>
        <div className="my-10 mx-10 flex flex-col md:flex-row gap-10 justify-center mb-12 text-sm">
          <img src={ContactImg} className="w-full md:max-w-[360px]" />
          <div className="flex flex-col justify-center gap-6 items-start">
            <p className="font-semibold text-lg text-gray-600">Our OFFICE</p>
            <p className="text-gray-500">
              54709 Willms Station<br></br>
              Suite 350, Washington, USA
            </p>
            <p className="text-gray-500">
              Tel: (415) 555‑0132 <br></br> Email: gugulothsandeepnaik82@gmail.com
            </p>
            <p className="font-semibold  text-lg text-gray-600">Careers at PRESCRIPTO</p>
            <p className="text-gray-500">Learn more about our teams and job openings.</p>
            <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">Explore Jobs</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
