import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Verified from "../assets/verified_icon.svg";
import Info from "../assets/info_icon.svg";
import ReleatedDoctors from "../components/ReleatedDoctors";

const Appointments = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const getAvailableSlots = async () => {
    let today = new Date();
    let allSlots = [];

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0) {
        currentDate.setHours(Math.max(currentDate.getHours() + 1, 10));
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      allSlots.push(timeSlots);
    }

    setDocSlots(allSlots);
  };

  useEffect(() => {
    if (doctors && docId) {
      const docData = doctors.find((doc) => doc._id === docId);
      setDocInfo(docData || null);
    }
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log("Updated Slots:", docSlots);
  }, [docSlots]);

  if (!docInfo) {
    return (
      <p className="text-center text-gray-500 text-lg mt-10">
        Doctor not found...
      </p>
    );
  }

  return (
    <>
      <div className="max-w-5xl mx-auto flex items-stretch gap-6">
        {/* Doctor Image Section */}
        <div className="w-1/3 bg-[#5f7FFF] flex justify-center items-center rounded-lg p-4">
          <img
            src={docInfo.image}
            alt={docInfo.name}
            className="w-50 h-80 object-cover rounded-lg text-gray-600"
          />
        </div>

        {/* Doctor Information Section */}
        <div className="w-2/3 bg-white shadow-md rounded-lg p-6 border flex flex-col justify-between">
          <div>
            <p className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              {docInfo.name}
              <img src={Verified} alt="Verified" className="w-5 h-5" />
            </p>
            <p className="text-gray-600 mt-1 text-lg">
              {docInfo.degree} - {docInfo.speciality}
            </p>

            <div className="mt-2 inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">
              {docInfo.experience} Years
            </div>

            {/* About Section */}
            <div className="mt-4">
              <p className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                About <img src={Info} alt="Info" className="w-4 h-4" />
              </p>
              <p className="text-gray-600 mt-1 leading-relaxed">
                {docInfo.about}
              </p>
            </div>
          </div>

          {/* Appointment Fee */}
          <p className="mt-4 text-lg font-semibold text-gray-900">
            Appointment fee:{" "}
            <span className="text-black font-bold">${docInfo.fees}</span>
          </p>
        </div>
        {/*  booking slots*/}
      </div>
      <div className="sm:ml-86 sm:pl-4 mt-4 font-medium text-gray-700">
        <p>Booking slots</p>
        <div className="flex gap-3 w-full items-center overflow-x-scroll mt-4">
          {docSlots.length &&
            docSlots.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    className={`text-center py-7 px-5 min-w-6 cursor-pointer rounded-full ${
                      slotIndex === index
                        ? "text-white bg-[#5f7FFF]"
                        : "border border-gray-200"
                    }`}
                    onClick={() => setSlotIndex(index)}
                  >
                    <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                    <p>{item[0] && item[0].datetime.getDate()}</p>
                  </div>
                </>
              );
            })}
        </div>
        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
          {docSlots.length &&
            docSlots[slotIndex].map((item, index) => {
              return (
                <>
                  <p
                    onClick={() => setSlotTime(item.time)}
                    key={index}
                    className={`
                    text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer

                    ${
                      item.time === slotTime
                        ? "bg-[#5f7FFF] text-white"
                        : "text-gray-400 border border-gray-300"
                    }

              
            `}
                  >
                    {item.time.toLowerCase()}
                  </p>
                </>
              );
            })}
        </div>
        <button className="mt-5 bg-[#5f7FFF] text-white text-sm px-14 py-3 rounded-full font-light">
          Book an appointment
        </button>
      </div>
      {/* listing releated doctors */}
      <ReleatedDoctors docId={docId} speciality={docInfo.speciality} />
    </>
  );
};

export default Appointments;
