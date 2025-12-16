import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const products = [
  {
    title: "Stainless Steel Scrap",
    image: "/SS.jpeg",
    desc: "Premium stainless steel scrap, available in various grades, ideal for foundries and steel manufacturing. Free from radioactive contamination, customizable in size and bundling, and ready for melting and reprocessing.",
  },
  {
    title: "Aluminium Scrap",
    image: "/Aluminium-scrap.png",
    desc: "Clean, high-purity aluminium scrap in multiple grades and forms, suitable for recycling in automotive, construction, and power transmission. Available as wires, profiles, and sheets, ensuring reliable quality.",
  },
  {
    title: "Copper Scrap",
    image: "/copper.png",
    desc: "High-conductivity copper scrap in forms like wire, tubes, and sheets, perfect for electrical applications. Clean, contamination-free, and competitively priced for industry use.",
  },
  {
    title: "Nickel & Alloy Materials",
    image: "/HIGH-NICKEL.png",
    desc: "Quality-tested nickel and specialty alloy scrap, including grades like 310, 309, 2205, 2507, Monel, Inconel, and more—perfect for high-value alloy production. Sourced from trusted partners and certified for consistency, ensuring premium quality for industrial applications.",
  },
  {
    title: "Brass Scrap",
    image: "/Brass-scrap.png",
    desc: "Top-grade brass scrap in various grades, ready for recycling and remelting across industrial applications. Properly sorted and available in custom specifications for diverse needs.",
  },
  {
    title: "CRGO Slit Coils",
    image: "/crgo-slit.webp",
    desc: "Versatile silicon steel for transformers, motors, and generators, ensuring efficient magnetic shielding and voltage stabilization. Offered in coils, slit coils, and offcuts, with sizes to meet customer specifications.",
  },
];

function ProductPage() {
  return (
    <>
      <Helmet>
        <title>Our Products | Babji Inframet</title>
      </Helmet>
      <div className="w-full bg-slate-50">
        {/* Navbar */}
        <Navbar variant="solid" position="sticky" />

        {/* Section */}
        <section className="pt-36 pb-24">
          <div className="max-w-7xl mx-auto px-6">
            {/* Heading */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Materials We Specialize In
              </h2>

              <div className="mt-5 flex justify-center">
                <span className="h-1 w-28 bg-green-700 rounded-full" />
              </div>

              <p className="mt-8 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                We deal in a comprehensive range of ferrous and non-ferrous
                scrap materials, processed and supplied to meet strict
                industrial quality standards.
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {products.map((product) => (
                <div
                  key={product.title}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group border border-slate-100"
                >
                  {/* Image */}
                  <div className="h-60 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {product.title}
                    </h3>

                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {product.desc}
                    </p>

                    <NavLink
                      to="/Quotation"
                      className="inline-flex items-center gap-2 text-green-700 font-semibold hover:gap-3 transition-all"
                    >
                      Enquire Now
                      <span>→</span>
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default ProductPage;
