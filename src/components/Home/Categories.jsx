import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import SectionTitle from "../SectionTitle";
import Category from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const categoriesCollectionRef = collection(db, "categories");

  useEffect(() => {
    const getCategories = async () => {
      const data = await getDocs(categoriesCollectionRef);
      setCategories(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getCategories();
  }, [categoriesCollectionRef]);
  return (
    <section className="py-[70px]">
      <div className="px-5 sm:px-0 sm:w-[65%] container mx-auto">
        {/* section title */}
        <SectionTitle
          heading="Top Categories"
          subHeading="Lorem ipsum dolor sit amet, consectetur."
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-8 mt-[55px]">
          {categories?.map((category) => (
            <Category category={category} key={category?.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
