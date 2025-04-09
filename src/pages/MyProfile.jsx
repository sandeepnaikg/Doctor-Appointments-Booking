import React from "react";
import { useState } from "react";
import Profile from "../assets/profile_pic.png";

const MyProfile = () => {
  const [userdata, setUserData] = useState({
    name: "sandeenaik",
    image: Profile,
    email: "gugulothsandeepnak82@gmail.com",
    phone: "(415) 555-0132",
    address: {
      line1: "54709 Willms Station Suite 350, Washington, USA",
      line2: "506381 Willms Station Suite 350, Washington, New York",
    },
    gender: "Male",
    dob: "2003-08-13",
  });
  const [isEdit, setEdit] = useState(false);
  return (
    <>
      <div className="flex flex-col  gap-2">
        <img src={userdata.image} className="w-36 rounded" />
        {isEdit ? (
          <input
            type="text"
            className="bg-gray-50 text-3xl max-w-60 font-medium mt-1"
            value={userdata.name}
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
          />
        ) : (
          <p className="text-3xl text-neutral-800 mt-4 font-medium">
            {userdata.name}
          </p>
        )}
        <hr className="bg-zinc-600 h-[1px ] border" />
        <div className="">
          <p className="text-neutral-400 underline mt-3">CONTACT INFORMATION</p>
          <div className="grid grid-cols-[1fr_3fr] gap-2">
            <p className="font-medium">Email id:</p>
            <p className="text-blue-500">{userdata.email}</p>
            <p className="font-medium">Phone:</p>
            {isEdit ? (
              <input
                className=" bg-gray-100 max-w-51"
                type="text"
                value={userdata.phone}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
              />
            ) : (
              <p className="text-blue-400">{userdata.phone}</p>
            )}
            <p className="font-medium">Address:</p>

            {isEdit ? (
              <p>
                <input
                  className="bg-gray-50 "
                  type="text"
                  value={userdata.address.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: {
                        ...prev.address,
                        line1: e.target.value,
                      },
                    }))
                  }
                />
                <br />
                <input
                  className="bg-gray-50 "
                  type="text"
                  value={userdata.address.line2}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: {
                        ...prev.address,
                        line2: e.target.value,
                      },
                    }))
                  }
                />
              </p>
            ) : (
              <p className="text-gray-600">
                {userdata.address.line1}
                <br />
                {userdata.address.line2}
              </p>
            )}
          </div>
        </div>
        <div>
          <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3">
            <p className="font-medium ">Gender:</p>
            {isEdit ? (
              <select
                className="bg-gray-50 max-w-71"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                value={userdata.gender}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="text-gray-400">{userdata.gender}</p>
            )}
            <p className="font-medium">Date of Birth:</p>
            {isEdit ? (
              <input
                className="bg-gray-50 max-w-71"
                type="date"
                value={userdata.dob}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    dob: e.target.value,
                  }))
                }
              />
            ) : (
              <p>{userdata.dob}</p>
            )}
          </div>
        </div>
        <div className="mt-6">
          {
            <button
              className="bg-[#5f7FFF] text-white w-full py-2 max-w-[150px] rounded-md text-base cursor-pointer mt-3"
              onClick={() => {
                setEdit(!isEdit);
              }}
            >
              {isEdit ? "Edit" : "Save Information"}
            </button>
          }
        </div>
      </div>
    </>
  );
};

export default MyProfile;
