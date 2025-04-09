import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);
  return (
    <>
      <div>
        <p className="pb-3 mt-12 font-medium text-zinc-500 border-b">
          My appointments
        </p>
        <div>
          {doctors.slice(0, 3).map((item, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-[1fr_3fr] gap-4 sm:flex sm:gap-6 py-2 border-b mt-4"
              >
                <div>
                  <img
                    src={item.image}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.speciality}</p>
                    <p className="text-sm font-medium mt-1">Address:</p>
                    <p className="text-sm">{item.address.line1}</p>
                    <p className="text-sm">{item.address.line2}</p>
                    <p className="text-sm mt-2">
                      <span className="font-medium">Date & Time:</span> 25th
                      July 2021 | 10:00 AM
                    </p>
                  </div>

                  <div className="flex justify-end gap-4 mt-3">
                    <button className="px-4 py-2 border border-gray-500 rounded-md hover:bg-gray-100 hover:text-black  transition-all duration-300 cursor-pointer">
                      Cancel Appointment
                    </button>
                    <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-all duration-300 cursor-pointer">
                      Pay Online
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyAppointments;
