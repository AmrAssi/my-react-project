import { collection, getDocs } from "firebase/firestore";
import { React, useEffect, useState } from "react";
import { db } from "../../firebase-config";
import SectionTitle from "../SectionTitle";
import Course from "./Course";

const Courses = () => {
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);

  const categoriesCollectionRef = collection(db, "categories");
  const coursesCollectionRef = collection(db, "courses");

  useEffect(() => {
    const getCategories = async () => {
      const data = await getDocs(categoriesCollectionRef);
      setCategories(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const getCourses = async () => {
      const data = await getDocs(coursesCollectionRef);
      setCourses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getCategories();
    getCourses();
  }, [categoriesCollectionRef, coursesCollectionRef]);
  return (
    <section>
      <div className="px-5 sm:px-0 sm:w-[65%] container mx-auto py-[70px]">
        <SectionTitle
          heading="Our Most Popular Courses"
          subHeading="10,000+ unique online course list designs"
        />

        {/* categories nav */}
        <div>
          <ul className="flex flex-wrap items-center justify-center gap-4 mt-[56px]">
            <li className="py-2 px-3 inline-block cursor-pointer transition-all bg-[#F4F1FE] text-[#6440fb] rounded-md font-medium text-[15px]">
              All Categories
            </li>

            {categories?.map((category) => (
              <li
                key={category?.id}
                className="py-2 px-3 inline-block cursor-pointer transition-all hover:bg-[#F4F1FE] hover:text-[#6440fb] rounded-md font-medium text-[15px]"
              >
                {category?.name}
              </li>
            ))}
          </ul>
        </div>

        {/* course list */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mt-[60px]">
          {courses?.map((course) => (
            <Course course={course} key={course?.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
