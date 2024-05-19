import React from "react";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <main className="h-full flex flex-col justify-around bg-[url('./assets/intro_bg.svg')] bg-no-repeat bg-cover py-16 px-8 text-[#FFFFFF]">
      <h2 className="text-4xl font-extrabold">
        You got the travel plans, we got the travel vans.
      </h2>
      <p className="font-medium mt-4">
        Add adventure to your life by joining #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link
        to="/vans"
        className="w-full bg-[#FF8C38] font-bold leading-8 py-2 mt-8 rounded text-center"
      >
        Find your van
      </Link>
    </main>
  );
}
