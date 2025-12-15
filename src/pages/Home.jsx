//import { useState } from "react";
import CompanySlider from "../components/ CompanySlider";
import AboutUs from "../components/AboutUs";
import Navbar from "../components/Navbar";
//mport products from "../components/products";
import Slider from "../components/Slider";
import Products from "../components/Products";

const slides = [
  {
    image: "/slider_1.jpg",
    titleStart: "Reliable ",
    highlight: " Scrap Metal ",
    titleEnd: "Manufacturing",
    desc: "Babji Enterprises delivers high-quality ferrous and non-ferrous scrap to industries with consistency and integrity.",
  },
  {
    image: "/slider-2.jpg",
    titleStart: "Advanced ",
    highlight: "Scrap Processing",
    titleEnd: " & Recycling",
    desc: "Equipped with modern machinery to ensure efficient processing, quality control, and timely delivery.",
  },
  {
    image: "/slider-3.webp",
    titleStart: " ",
    highlight: "Sustainable",
    titleEnd: "& Responsible Recycling",
    desc: "Committed to eco-friendly practices that support a cleaner, greener industrial future.",
  },
];

function Home() {
  return (
    <>
      <div className="relative h-screen">
        <Navbar />
        <Slider slides={slides} />
      </div>
      <AboutUs />
      <CompanySlider />
      <Products />
    </>
  );
}

export default Home;
