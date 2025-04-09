import React from "react";
import AboutImg from "../assets/about_image.png";

const About = () => {
  return (
    <>
      <div>
        <div className="text-center text-2xl text-gray-500 ">
          <p>
            ABOUT <span className="text-gray-700 font-medium">US</span>
          </p>
        </div>
        <div className="my-10 flex flex-col md:flex-row gap-12 items-center">
          <img src={AboutImg} className="w-full md:max-w-[360px]" />
          <div className="flex flex-col justify-center gap-6 w-2/4 text-sm text-gray-600">
            <p>
              Welcome to Prescripto, your trusted partner in managing your
              healthcare needs conveniently and efficiently. At Prescripto, we
              understand the challenges individuals face when it comes to
              scheduling doctor appointments and managing their health records
            </p>
            <p>
              Prescripto is committed to excellence in healthcare technology. We
              continuously strive to enhance our platform, integrating the
              latest advancements to improve user experience and deliver
              superior service. Whether you're booking your first appointment or
              managing ongoing care, Prescripto is here to support you every
              step of the way.
            </p>
            <b className="text-gray-800">Our Vision</b>
            <p>
              Our vision at Prescripto is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </div>
        </div>
        <div className="text-xl my-4">
          <p>
            WHY <span className="text-gray-700 font-semi-bold">CHOOSE US</span>{" "}
          </p>
        </div>

        <div className="flex flex-col md:flex-row mb-20">
          <div className="flex flex-col gap-5 border px-10 md:py-10 sm:py-16 text-[15px] bg-white text-gray-600 hover:bg-[#5f7FFF] hover:text-white transition-all duration-300 cursor-pointer">
            <b>Efficiency:</b>
            <p>
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>

          <div className="flex flex-col gap-5 border px-10 md:py-10 sm:py-16 text-[15px] bg-white text-gray-600 hover:bg-[#5f7FFF] hover:text-white transition-all duration-300 cursor-pointer">
            <b>Convenience</b>
            <p>
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>

          <div className="flex flex-col gap-5 border px-10 md:py-10 sm:py-16 text-[15px] bg-white text-gray-600 hover:bg-[#5f7FFF] hover:text-white transition-all duration-300 cursor-pointer">
            <b>Personalization:</b>
            <p>
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
