import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { WordCounterApp } from "./components/wordCounterApp/WordCounterApp";


export const MainApp = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/word-counter" element={<WordCounterApp />} />
        {/*<Route path="/" element={<Home />} />*/}
      </Routes>
    </>
  );
};
