import { useState, useEffect, useCallback } from "react";

function Slider({ slides }) {
  const [count, setCount] = useState(0);

  const prevSlide = () => {
    setCount((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const nextSlide = useCallback(() => {
    setCount((prev) => (prev + 1) % slides.length);
  }, [slides.length]);
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-screen  overflow-hidden ">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === count ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
              {slide.titleStart}
              <span className="relative inline-block overflow-hidden rounded-md px-3 py-1">
                {/* Sliding background */}
                <span
                  className={`absolute inset-0 bg-green-500 transition-transform duration-700 ease-out
      ${index === count ? "translate-x-0" : "-translate-x-full"}
    `}
                />

                {/* Text (always visible) */}
                <span className="relative z-10 text-white">
                  {slide.highlight}
                </span>
              </span>
              {slide.titleEnd}
            </h1>
            <p className="text-white text-lg md:text-xl max-w-2xl mb-6">
              {slide.desc}
            </p>
            <button className="bg-green-500 h-18 text-white  w-64 text-2xl hover:-translate-y-2.5 rounded-md">
              Get Quotation
            </button>
          </div>
        </div>
      ))}
      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCount(index)}
            className={`w-3 h-3 rounded-full ${
              count === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
