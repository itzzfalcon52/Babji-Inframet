import { useEffect, useState } from "react";

const products = [
  {
    image: "/copper.png",
    title: "Copper Materials",
    desc: "High-quality copper scrap supplied for industrial and manufacturing applications.",
  },
  {
    image: "/Brass-scrap.png",
    title: "Brass Scrap",
    desc: "Premium brass scrap processed to meet industry-grade standards.",
  },
  {
    image: "/crgo-slit.webp",
    title: "CRGO Slit Coils",
    desc: "Precision-cut CRGO slit coils for electrical and industrial use.",
  },
  {
    image: "/HIGH-NICKEL.png",
    title: "Nickel & Alloy Materials",
    desc: "High-nickel and alloy scrap suitable for demanding industrial needs.",
  },
  {
    image: "/SS.jpeg",
    title: "Stainless Steel Scrap",
    desc: "Quality-controlled stainless steel scrap in various grades.",
  },
  {
    image: "/Aluminium-scrap.png",
    title: "Aluminium Scrap",
    desc: "Clean and processed aluminium scrap for manufacturing industries.",
  },
];

function Products() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev + 1) % products.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const product = products[count];

  return (
    <section className="w-full h-screen bg-gray-50 py-24">
      {/* Section Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">
        Our Product Range
      </h2>
      <div className="bg-white rounded-3xl shadow-lg shadow-slate-200/70 p-12 mx-12">
        {/* Slider */}
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* LEFT: Image */}
            <div className="md:w-2/5 w-full flex justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full max-w-sm object-cover shadow-xl rounded-2xl ring-1 ring-slate-200"
              />
            </div>

            {/* RIGHT: Content */}

            <div className="md:w-3/5 w-full text-center md:text-left space-y-6">
              <h3 className="text-3xl font-bold relative inline-block">
                {product.title}
                <span className="absolute left-0 -bottom-2 w-16 h-1 bg-green-500 rounded-full"></span>
              </h3>

              <p className="text-slate-600 text-lg max-w-xl">{product.desc}</p>

              <button
                className="bg-green-500 text-white px-8 py-4 rounded-xl
  hover:bg-green-600 hover:-translate-y-0.5 transition-all duration-300 shadow-md"
              >
                Product Details
              </button>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCount(index)}
              className={`w-3 h-3 rounded-full ${
                count === index ? "bg-green-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
