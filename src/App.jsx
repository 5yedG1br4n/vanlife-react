import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="w-1/2 h-screen mx-auto flex flex-col">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
