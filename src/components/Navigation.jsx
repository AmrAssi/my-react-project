import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import CourseModal from "./CourseModal";

const Navigation = () => {
  const [addCourseBox, setAddCourseBox] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const control = () => {
    setAddCourseBox(!addCourseBox);
  };
  return (
    <>
      <nav className="bg-[#140342] text-white fixed top-0 right-0 w-full z-30 px-5 lg:px-0">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-4 border-b border-white/20">
            <div>
              <Link to="/" className="flex items-center gap-3">
                <img src="/img/logo.png" alt="logo" />
                <h3 className="text-xl font-semibold">Logo Here</h3>
              </Link>
            </div>
            <div>
              <FaBars
                className="block lg:hidden text-2xl cursor-pointer"
                onClick={() => setMobileMenu(!mobileMenu)}
              />
              <ul
                className={`fixed transition-all duration-300 top-20 ${
                  mobileMenu ? "scale-100" : "scale-0"
                } lg:scale-100 left-0 right-0 bg-white text-black text-center h-full lg:relative lg:bg-transparent lg:text-white text-xl lg:text-base lg:top-0 lg:flex items-center gap-6`}
              >
                <li>
                  <Link
                    className="inline-block py-2 px-3 rounded-lg transition-all hover:bg-[#37295D]"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block py-2 px-3 rounded-lg transition-all hover:bg-[#37295D]"
                    to="/"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block py-2 px-3 rounded-lg transition-all hover:bg-[#37295D]"
                    to="/"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block py-2 px-3 rounded-lg transition-all hover:bg-[#37295D]"
                    to="/"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block py-2 px-3 rounded-lg transition-all hover:bg-[#37295D]"
                    to="/"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <button
                className="py-2 px-4 rounded-md inline-block bg-white text-[#140342] font-semibold border border-white transition-all hover:bg-transparent hover:text-white"
                onClick={control}
              >
                Add Course
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* add course modal */}
      <CourseModal addCourseBox={addCourseBox} control={control} />
    </>
  );
};

export default Navigation;
