/* eslint-disable react-hooks/exhaustive-deps */
import { deleteDoc, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillStar } from "react-icons/ai";
import { MdAccessTime } from "react-icons/md";
import { TbBrandGoogleAnalytics, TbNotes } from "react-icons/tb";
import { Link } from "react-router-dom";
import { db } from "../../firebase-config";
import CourseModal from "../CourseModal";

const Course = ({ course }) => {
  const [editedBox, setEditedBox] = useState(false);
  const [editedCourse, setEditedCourse] = useState({});

  const control = () => {
    setEditedBox(!editedBox);
  };

  useEffect(() => {
    if (editedCourse?.id) {
      control();
    }
  }, [editedCourse]);

  // delete cours
  const deleteCourse = async (id) => {
    const courseDoc = doc(db, "courses", id);
    await deleteDoc(courseDoc);
    toast.success("Course deleted successfully");
  };
  return (
    <>
      <div className="courseItem">
        <div className="overflow-hidden rounded-md relative">
          <img
            className="rounded-md transition w-full"
            src={course?.thumbnail}
            alt=""
          />
          <div className="absolute transition-all duration-500 left-0 right-0 -bottom-[150%] w-full h-full bg-[#140342]/60 buttonsWrapper">
            <div className="absolute -bottom-[150%] transition-all duration-300 left-0 right-0 flex items-center justify-center text-white gap-2 courseButtons">
              <button
                className="inline-block py-[6px] border border-[#00FF84] px-4 bg-[#00FF84] rounded-md transition-all hover:bg-transparent"
                onClick={() => setEditedCourse(course)}
              >
                Edit
              </button>
              <button
                className="inline-block py-[6px] px-4 bg-red-600 rounded-md border border-red-600 transition-all hover:bg-transparent"
                onClick={() => deleteCourse(course?.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 text-sm text-[#e59819] mt-2">
            <span className="font-medium">5.0</span>
            <ul className="flex items-center">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </ul>
          </div>
          <h3 className="text-[#140342] font-medium text-[17px]">
            <Link
              to={`/courses/${course?.id}`}
              className="transition-all hover:text-[#140342]"
            >
              {course?.title}
            </Link>
          </h3>
          <div className="flex items-center justify-between gap-2 mt-3 pb-2 border-b">
            <div className="flex items-center gap-1 text-sm text-[#4f547b] font-medium">
              <TbNotes />
              <span>6 lesson</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-[#4f547b] font-medium">
              <MdAccessTime />
              <span>3h 56m</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-[#4f547b] font-medium">
              <TbBrandGoogleAnalytics />
              <span>Beginner</span>
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="https://creativelayers.net/themes/educrat-html/img/general/avatar-1.png"
                alt="user"
              />
              <h3 className="text-sm text-[#4f547b] font-medium">John Doe</h3>
            </div>
            <h3 className="text-lg font-medium text-[#140342]">
              ${course?.price}
            </h3>
          </div>
        </div>
      </div>

      <CourseModal
        control={control}
        addCourseBox={editedBox}
        editedCourse={editedCourse}
      />
    </>
  );
};

export default Course;
