import React from "react";
import Categories from "../components/Home/Categories";
import Courses from "../components/Home/Courses";
import Header from "../components/Home/Header";

const Home = () => {
  return (
    <main>
      {/* header area */}
      <Header />

      {/* categories area */}
      <Categories />

      {/* courses area */}
      <Courses />
    </main>
  );
};

export default Home;
