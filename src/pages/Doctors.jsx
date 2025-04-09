import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);

  useEffect(() => {
    if (doctors) {
      setFilterDoc(
        speciality
          ? doctors.filter(
              (doc) => doc.speciality.toLowerCase() === speciality.toLowerCase()
            )
          : doctors
      );
    }
  }, [speciality, doctors]);

  return (
    <>
      <div className="flex gap-6">
        {/* Left Section - Categories */}
        <div className="flex flex-col gap-3">
          <p
            className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition cursor-pointer"
            onClick={() =>
              speciality === "General Physician"
                ? navigate("/doctors")
                : navigate("/doctors/General Physician")
            }
          >
            General Physician
          </p>
          <p
            className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition cursor-pointer"
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
          >
            Gynecologist
          </p>
          <p
            className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition cursor-pointer"
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
          >
            Dermatologist
          </p>
          <p
            className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition cursor-pointer"
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
          >
            Pediatricians
          </p>
          <p
            className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition cursor-pointer"
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
          >
            Neurologist
          </p>
          <p
            className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition cursor-pointer"
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist")
            }
          >
            Gastroenterologist
          </p>
        </div>

        {/* Right Section - Doctors Grid (3 per row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full ">
          {filterDoc.length > 0 ? (
            filterDoc.map((item) => (
              <div
                key={item._id}
                className="border border-blue-200 bg-blue-50 rounded-xl cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300"
                onClick={() => navigate(`/appointments/${item._id}`)}
              >
                {/* Center Image */}
                <div className="flex justify-center bg-white p-4 hover:-mt-2 transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-48 object-contain"
                  />
                </div>

                {/* Doctor Details */}
                <div className="p-4">
                  <div className="flex items-center text-sm gap-2 text-green-500">
                    <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                    <p>Available</p>
                  </div>
                  <p className="text-gray-700 text-lg font-semibold">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">{item.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No doctors found.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Doctors;
