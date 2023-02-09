import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center">
      <h2 className="text-[#140342] text-[30px] font-bold mb-1">{heading}</h2>
      <p className="text-[#4f547b] text-[15px]">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
