import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { MdAccessTime } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { db } from "../firebase-config";

const SingleCourse = () => {
  const [course, setCourse] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const getCourse = async () => {
        const courseDoc = doc(db, "courses", id);
        const courseDetails = await getDoc(courseDoc);
        setCourse(courseDetails.data());
      };

      getCourse();
    }
  }, [id]);
  return (
    <main className="mt-20 bg-[#F5F7FE]">
      <div className="container w-[65%] container mx-auto">
        <div className="flex justify-between gap-[60px] w-full">
          <div className="w-[70%]">
            <div className="py-[90px]">
              <h2 className="text-[#140342] text-[30px] font-bold w-[70%] mb-6">
                {course?.title}
              </h2>
              <p className="text-[15px] text-[#4f547b] w-[58%]">
                {course?.description}
              </p>

              <div className="flex items-center gap-6 my-6">
                <div className="flex items-center gap-2 text-sm text-[#e59819]">
                  <span className="font-medium">5.0</span>
                  <ul className="flex items-center">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </ul>
                  <span className="text-[#4f547b]">(2024)</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-[#4f547b] font-medium">
                  <TbNotes />
                  <span>853 enrolled on this course</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-[#4f547b] font-medium">
                  <MdAccessTime />
                  <span>Last updated 11/2021</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <img
                  src="https://creativelayers.net/themes/educrat-html/img/general/avatar-1.png"
                  alt="user"
                />
                <h3 className="text-sm text-[#4f547b] font-medium">John Doe</h3>
              </div>

              <div className="mt-[50px] border-t-2 py-[30px]">
                <h3 className="text-[#140342] text-lg font-medium">
                  Description
                </h3>
                <div className="mt-6">
                  <p className="text-[#4f547b]">{course?.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%] bg-white mb-20 mt-[100px] rounded-md shadow-md h-fit">
            <div className="m-3 rounded-md">
              <img
                className="rounded-md"
                src="https://creativelayers.net/themes/educrat-html/img/coursesCards/1.png"
                alt="thumbnail"
              />
            </div>
            <div className="m-7">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl text-[#140342] font-medium">
                  ${course?.price}
                </h2>
                <del className="text-[#4f547b] text-[15px]">$76.00</del>
              </div>
              <div className="mt-7 flex flex-col gap-3">
                <button className="w-full block bg-[#6440FB] text-white py-4 rounded-md font-semibold text-base border-2 border-[#6440FB] transition-all hover:bg-transparent hover:text-[#6440FB]">
                  Add To Cart
                </button>
                <button className="w-full block hover:bg-[#140342] text-white py-4 rounded-md font-semibold text-base border-2 border-[#140342] transition-all bg-transparent text-[#140342] hover:text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleCourse;
