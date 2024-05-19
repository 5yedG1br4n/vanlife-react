import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="py-6 px-8 bg-[#FFF7ED]">
      <nav className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-black leading-10 text-[#000000]">
          #VANLIFE
        </Link>
        <div className="font-semibold leading-6 text-[#4D4D4D] flex gap-4">
          <Link
            to="/about"
            className="focus:border-b-2 pb-0.5 border-[#161616] focus:text-[#161616]"
          >
            About
          </Link>
          <Link
            to="/vans"
            className="focus:border-b-2 pb-0.5 border-[#161616] focus:text-[#161616]"
          >
            Vans
          </Link>
        </div>
      </nav>
    </header>
  );
}
