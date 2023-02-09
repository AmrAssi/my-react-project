import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import SingleCourse from "./pages/SingleCourse";

const App = () => {
  return (
    <>
      <Toaster />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<SingleCourse />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
