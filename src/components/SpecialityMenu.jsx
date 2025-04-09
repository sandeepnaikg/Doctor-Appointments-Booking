import React from "react";
import {specialityData} from "../assets/assets";
import { Link } from "react-router-dom";
const SpecialityMenu = () => {
  return (
    <div id="speciality" className="flex flex-col items-center gap-4 py-16 text-gray-800">
      <h1 className="text-3xl font-medium">Find by Speciality</h1>
      <p className="text-center text-sm sm:w-1/2">
        {" "}
        simply browse through of our extensive list of trusted doctors,schedule{" "}
       your appointments hassle-free
      </p>
      <div className="flex gap-6 justify-center pt-5 w-full overflow-scroll">
        {specialityData.map((item, index) => {
          return (
            <Link onClick={()=>scrollTo(0,0)}  to={`/doctors/${item.speciality}`} key={index} className="flex flex-col items-center cursor-pointer text-xs flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500">
              <img  className="sm:w-24 w-16 mb-2" src={item.image} alt="" />
              <p>{item.speciality}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SpecialityMenu;
