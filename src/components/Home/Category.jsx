import React from "react";

const Category = ({ category }) => {
  return (
    <div className="py-6 bg-[#EEF2F6] text-center rounded-lg">
      <div className="w-[90px] h-[90px] rounded-full bg-white flex items-center justify-center mx-auto">
        <img className="mx-auto" src="/img/categories/6.svg" alt="category" />
      </div>
      <div>
        <h2 className="text-[17px] font-medium text-[#140342] mt-3">
          {category?.name}
        </h2>
        <p className="text-[13px] mt-3 text-[#4f547b]">570+ Courses</p>
      </div>
    </div>
  );
};

export default Category;
