//import { useState, useEffect } from "react";
const logos = ["/lt.png", "ma.png", "rel.png", "ved.png"];
function CompanySlider() {
  return (
    <div className="w-full  bg-slate-100 py-12 overflow-hidden">
      <h2 className="text-center text-2xl font-semibold mb-8">
        Trusted by Industry Leaders
      </h2>

      <div className="relative overflow-hidden">
        <div className="flex w-[200%] animate-scroll ">
          {/* First set */}
          <div className="flex w-1/2 justify-between">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Company logo"
                className="h-16 w-auto object-contain grayscale opacity-70 hover:opacity-100 transition"
              />
            ))}
          </div>
          {/* Duplicate set */}
          <div className="flex w-1/2 justify-around">
            {logos.map((logo, index) => (
              <img
                key={`dup-${index}`}
                src={logo}
                alt="Company logo"
                className="h-16 w-auto object-contain grayscale opacity-70 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanySlider;
