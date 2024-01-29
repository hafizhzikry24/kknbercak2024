import React, { useState } from "react";
import Logo from "../assets/favicon-32x32.png";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIconVisible, setIsIconVisible] = useState(true);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsIconVisible(!isIconVisible);
  };

  return (
    <header className="text-[#50866a] body-font bg-[#F4F27E] 200 sticky top-0 shadow-xl">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0"
          // onClick={handleMobileMenuToggle}
        >
          <img alt="gallery" src={Logo} />
          <span className="ml-3 text-2xl text-[#50866a] font-bold font-sans">
            Desa bercak
          </span>
        </a>

        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:ml-auto md:flex md:items-center`}
        >
          <a href="#profile" className="mr-5 hover:text-white font-bold mx-3">
            Profil
          </a>
          <a href="#goals" className="mr-5 hover:text-white font-bold mx-3">
            Tujuan
          </a>
          <a href="#structure" className="mr-5 hover:text-white font-bold mx-3">
            Struktur
          </a>
          <a
            href="#demographic"
            className="mr-5 hover:text-white font-bold mx-3"
          >
            Mengenai
          </a>
        </nav>
        <button
          onClick={handleMobileMenuToggle}
          className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-[#F4F27E]  rounded text-base md:mt-0 md:hidden"
        >
          {isIconVisible && (
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#8c8812"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M5 6H12H19M5 12H19M5 18H19"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>{" "}
              </g>
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
