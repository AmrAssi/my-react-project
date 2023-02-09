import React from "react";

const Header = () => {
  return (
    <header
      className="mt-20 min-h-[60vh] lg:min-h-[92vh] flex items-center justify-center"
      style={{ backgroundImage: `url(/img/bg.png)` }}
    >
      <div className="container mx-auto flex items-center justify-between gap-20">
        <div className="text-center lg:text-left px-5 lg:px-0">
          <h2 className="text-white font-bold text-[40px] sm:text-[55px]">
            Welcome to the store
          </h2>
          <p className="text-white text-[17px] lg:w-[90%] mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            nisi iusto quibusdam architecto ab pariatur dolor illum facere!
          </p>
          <div className="mt-7">
            <button className="py-4 px-[56px] bg-[#6440FB] text-white inline-block text-lg font-medium rounded-lg border-2 border-[#6440FB] transition-all hover:bg-transparent hover:text-[#6440FB]">
              Find Courses
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            className="w-[1200px]"
            src="/img/header-bg.png"
            alt="header bg"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
