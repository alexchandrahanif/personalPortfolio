import React, { useState } from "react";

import {
  dark1,
  dark2,
  light1,
  light2,
  copyright,
  email1,
  email2,
  figma1,
  figma2,
  github1,
  github2,
  lokasi1,
  lokasi2,
  telepon1,
  telepon2,
  twitter1,
  twitter2,
  tujuan1,
  x,
  titik5,
  logo,
} from "../assets";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  const handleDarkMode = () => {
    setIsDark(!isDark);
    const html = document.querySelector("html");
    if (!isDark) {
      html.classList.add("dark");
      localStorage.setItem("darkmode", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("darkmode", "light");
    }
  };

  const handelDownloadCv = () => {
    const fileUrl =
      "https://drive.google.com/file/d/1NgIA0fvTgTzRl2lja31tvqD0MQzmuVxr/view?usp=sharing";
    window.open(fileUrl, "_blank");
  };

  return (
    <div className="py-4 px-6 border-b border-slate-200 fixed w-full  bg-white sm:px-12  dark:bg-dark">
      <nav
        className={`w-full h-[36px] sm:px-5 flex justify-center items-center `}
      >
        <div className="w-full flex justify-between items-center">
          {/* Bagian 1 */}
          <div>
            <p className="font-semibold text-lg dark:text-white">
              <img src={logo} alt="logo" className="h-10 w-10" />
            </p>
          </div>
          <div></div>

          {/* Bagian 2 */}
          {hamburger ? (
            <div className="relativ w-full bg-slate-800 sm:hidden ">
              <div className="absolute w-[15%] h-[900px] left-0 top-0  bg-slate-200 dark:bg-white"></div>
              <div className="absolute w-[85%] h-[900px] right-0 top-0 bg-white shadow-lg  dark:bg-black">
                {/* Logo */}
                <div className="h-[64px] flex justify-between px-6 py-8 items-center w-full border-b-2">
                  <p className="text-lg font-semibold dark:text-white dark:font-semibold">
                    <img src={logo} alt="logo" className="h-10 w-10" />
                  </p>
                  <div onClick={() => setHamburger(!hamburger)}>
                    <img src={x} alt="x" className="h-10 w-10" />
                  </div>
                </div>

                {/* Bagian menu */}
                <div className="w-full px-4">
                  <p
                    onClick={() => setHamburger(!hamburger)}
                    className=" py-3 text-lg font-normal dark:text-white dark:font-light"
                  >
                    <a href="#profile">Profile</a>
                  </p>
                  <p
                    onClick={() => setHamburger(!hamburger)}
                    className="py-3 text-lg font-normal dark:text-white dark:font-light"
                  >
                    <a href="#skill">Skill</a>
                  </p>
                  <p
                    onClick={() => setHamburger(!hamburger)}
                    className="py-3 text-lg font-normal dark:text-white dark:font-light"
                  >
                    <a href="#experience">Experience</a>
                  </p>
                  <p
                    onClick={() => setHamburger(!hamburger)}
                    className="py-3 text-lg font-normal dark:text-white dark:font-light"
                  >
                    <a href="#work">Work</a>
                  </p>
                  <p
                    onClick={() => setHamburger(!hamburger)}
                    className="py-3 text-lg font-normal dark:text-white dark:font-light"
                  >
                    <a href="#contact">Contact</a>
                  </p>
                </div>

                {/* Bagian Switch Theme */}
                <div className="flex justify-between p-4 items-center">
                  <p className="text-lg font-normal dark:text-white dark:font-light">
                    Switch Theme
                  </p>
                  <button
                    className="font-medium cursor-pointer  rounded-md border-slate-300 shadow-md"
                    onClick={() => handleDarkMode()}
                  >
                    {isDark ? (
                      <img src={dark2} className="w-8 h-8 p-1 text-white" />
                    ) : (
                      <img src={light1} className="w-8 h-8 p-1" />
                    )}
                  </button>
                </div>

                <div className=" w-full p-4">
                  <button
                    className="w-full  font-medium cursor-pointer bg-black rounded-md p-1 dark:bg-white"
                    onClick={handelDownloadCv}
                  >
                    <p className="text-white text-lg font-semibold dark:text-dark">
                      Download CV
                    </p>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="flex sm:hidden"
              onClick={() => setHamburger(!hamburger)}
            >
              <img src={titik5} alt="" className="w-8 h-8" />
            </div>
          )}

          {/* Bagian 3 */}
          <div className="hidden gap-10 sm:flex">
            <ul className="flex items-center gap-5 w-[450px] justify-evenly">
              <li className="font-medium cursor-pointer dark:text-white">
                <a href="#profile">Profile</a>
              </li>
              <li className="font-medium cursor-pointer dark:text-white">
                <a href="#skill">Skill</a>
              </li>
              <li className="font-medium cursor-pointer dark:text-white">
                <a href="#experience">Experience</a>
              </li>
              <li className="font-medium cursor-pointer dark:text-white">
                <a href="#work">Work</a>
              </li>
              <li className="font-medium cursor-pointer dark:text-white">
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <div className="flex w-[180px] justify-between">
              <button
                className="font-medium cursor-pointer  rounded-md border-slate-300 shadow-md"
                onClick={() => handleDarkMode()}
              >
                {isDark ? (
                  <img src={dark2} className="w-8 h-8 p-1 text-white" />
                ) : (
                  <img src={light1} className="w-8 h-8 p-1" />
                )}
              </button>
              <button
                className="font-medium cursor-pointer bg-black rounded-md p-1 dark:bg-white"
                onClick={handelDownloadCv}
              >
                <p className="text-white dark:text-dark">Download CV</p>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
