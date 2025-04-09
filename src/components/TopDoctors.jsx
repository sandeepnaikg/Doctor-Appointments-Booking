import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="text-center text-sm sm:w-1/2">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0">
      {doctors.slice(0, 10).map((item, index) => {
          return (
            <div
              key={index}
              className="border border-blue-200 rounded-xl cursor-pointer overflow-hidden hover:translate-y-[-10px] transition-all duration-500"
              onClick={() => navigate(`/appointments/${item._id}`)}
            >
              <img src={item.image} alt={item.name} className="bg-blue-50" />
              <div className="p-4">
                <div className="flex items-center text-sm gap-2 text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-600 text-sm  font-bold">{item.name}</p>
                <p className="text-sm text-gray-600">{item.speciality}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button
  className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 cursor-pointer"
  onClick={() => {
    navigate("/doctors");
    window.scrollTo(0, 0);  
  }}
>
  More
</button>

    </div>
  );
};

export default TopDoctors;
