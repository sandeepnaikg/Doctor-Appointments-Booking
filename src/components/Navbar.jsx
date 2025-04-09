import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../src/assets/logo.svg";
import Profile from "../assets/profile_pic.png";
import Drop from "../assets/dropdown_icon.svg";
import Menu from "../assets/menu_icon.svg";
import CrossIcon from "../assets/cross_icon.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex justify-between items-center text-sm py-4 border-gray-200 md:py-6 border-b">
      <img
        src={Logo}
        className="w-44 cursor-pointer"
        alt="Logo"
        onClick={() => navigate("/home")}
      />

      <ul className="hidden md:flex items-center gap-6 font-medium">
        {["home", "doctors", "about", "contact"].map((item) => (
          <NavLink key={item} to={`/${item}`}>
            <li className="py-1 uppercase">{item.replace("-", " ")}</li>
            <hr className="border-none h-0.5 w-3/5 m-auto hidden bg-[#5f7FFF]" />
          </NavLink>
        ))}
      </ul>

      <div className="flex gap-4 items-center relative">
        {token ? (
          <div
            className="flex items-center gap-2 cursor-pointer relative"
            onClick={() => setShowProfileMenu((prev) => !prev)}
          >
            <img src={Profile} className="w-8 rounded-full" />
            <img src={Drop} className="w-2.5" />
            {showProfileMenu && (
              <div className="absolute top-12 right-0 bg-stone-100 rounded-lg flex-col gap-4 p-4 cursor-pointer flex shadow-lg w-48 text-gray-600 text-base font-medium z-20">
                <p
                  className="hover:text-black"
                  onClick={() => navigate("my-profile")}
                >
                  My Profile
                </p>
                <p
                  className="hover:text-black"
                  onClick={() => navigate("my-appointments")}
                >
                  My Appointments
                </p>
                <p className="hover:text-black" onClick={() => setToken(false)}>
                  Logout
                </p>
              </div>
            )}
          </div>
        ) : (
          <button
            className="text-white px-8 py-3 rounded-full font-light md:block hidden bg-[#5f7FFF] cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Create Account
          </button>
        )}

        <img
          src={Menu}
          className="w-6 md:hidden cursor-pointer"
          onClick={() => setShowMenu(true)}
        />
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50">
          <div className="flex justify-between items-center px-5 py-6">
            <img src={Logo} className="w-36" />
            <img
              src={CrossIcon}
              className="w-7 cursor-pointer"
              onClick={() => setShowMenu(false)}
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <li>
              <NavLink
                to="/home"
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded inline-block ${
                    isActive ? "bg-[#5f7FFF] text-white" : "bg-transparent"
                  }`
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/doctors"
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded inline-block ${
                    isActive ? "bg-[#5f7FFF] text-white" : "bg-transparent"
                  }`
                }
              >
                ALL DOCTORS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded inline-block ${
                    isActive ? "bg-[#5f7FFF] text-white" : "bg-transparent"
                  }`
                }
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded inline-block ${
                    isActive ? "bg-[#5f7FFF] text-white" : "bg-transparent"
                  }`
                }
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
