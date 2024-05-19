import React from "react";
import AboutImg from "./assets/about_img.svg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="bg-[#FFF7ED] flex flex-col">
      <img
        className="w-full"
        src={AboutImg}
        alt="A man sitting on a vans roof looking up at the night sky"
      />
      <div className="px-8 py-12">
        <h2 className="font-bold text-3xl">
          Don’t squeeze in a sedan when you could relax in a van.
        </h2>
        <p className="mt-8 mb-4">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. <br />
          (Hitch costs extra 😉).
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <section className="bg-[#FFCC8D] py-8 px-6 mt-12 rounded-md mb-4">
          <h3 className="text-2xl font-bold">
            Your destination is waiting.{" "}
            <span className="block">Your van is ready.</span>
          </h3>
          <Link
            to="/vans"
            className="bg-[#161616] text-white leading rounded-lg px-6 py-4 mt-6 block w-fit"
          >
            Explore our Vans
          </Link>
        </section>
      </div>
    </main>
  );
}
