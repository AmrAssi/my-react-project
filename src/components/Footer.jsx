import React from "react";
import { MdLanguage } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-6 bg-[#140342] text-white">
      <div className="px-5 sm:px-0 sm:w-[65%] container mx-auto">
        <div className="flex items-center justify-between flex-wrap">
          <p className="mb-5 lg:mb-0">© 2022 Educrat. All Right Reserved.</p>
          <div className="flex flex-wrap items-center gap-7">
            <ul className="flex items-center gap-4 flex-wrap">
              <li>
                <Link to="#">Help</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Cookie Notice</Link>
              </li>
              <li>
                <Link to="#">Security</Link>
              </li>
              <li>
                <Link to="#">Terms of Use</Link>
              </li>
            </ul>
            <button className="flex items-center gap-3 bg-[#311F61] text-white py-3 px-7 rounded-full text-lg transition-all hover:bg-white hover:text-black">
              <MdLanguage className="text-2xl" />
              <span>English</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
