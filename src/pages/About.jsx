import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
//import { Helmet } from "react-helmet-async";
import usePageTitle from "../hooks/usePageTitle";

function About() {
  usePageTitle("About Us | Babji Inframet");
  return (
    <>
      <div className="w-full m-0 p-0 bg-slate-100">
        {/* Navbar */}
        <Navbar variant="solid" position="sticky" />

        {/* HERO SECTION */}
        <section className="relative pt-36 pb-28 bg-gradient-to-b from-slate-50 to-white text-center overflow-hidden">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            About Us
          </h1>

          <div className="mt-6 flex justify-center">
            <span className="h-1 w-24 bg-green-700 rounded-full" />
          </div>

          <p className="mt-8 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Babji Inframet is a trusted name in scrap metal trading and
            manufacturing, delivering consistent quality and sustainable
            solutions to industries across India.
          </p>
        </section>

        {/* ABOUT CONTENT */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <img
              src="/godown.jpg"
              alt="Babji Inframet Facility"
              className="rounded-2xl shadow-xl ring-1 ring-slate-200 hover:scale-[1.02] transition"
            />

            {/* Text */}
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Who We Are
              </h2>

              <p className="text-slate-600 mb-6 leading-relaxed text-[17px]">
                Established in 2002 and based in Vadodara, Gujarat, Babji
                Inframet is a trusted leader in the metal scrap industry. With
                over two decades of experience, we specialize in the trading,
                import, and supply of premium ferrous and non-ferrous scrap
                materials.
              </p>

              <p className="text-slate-600 leading-relaxed text-[17px]">
                Our commitment to integrity, transparency, and timely delivery
                has made us a reliable partner for industries across India.
              </p>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-20 bg-slate-100">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "20+", label: "Years of Experience" },
              { value: "500+", label: "Clients Served" },
              { value: "100%", label: "Quality Commitment" },
              { value: "Pan India", label: "Supply Network" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-green-700"
              >
                <p className="text-4xl font-bold text-green-700">
                  {stat.value}
                </p>
                <p className="mt-2 text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* VALUES SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">
              What Sets Us Apart
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Quality First",
                  desc: "We ensure strict quality checks across all materials we supply.",
                },
                {
                  title: "Sustainable Practices",
                  desc: "Responsible recycling and eco-conscious operations are core to us.",
                },
                {
                  title: "Trusted Partnerships",
                  desc: "Long-term relationships built on honesty and reliability.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-8 rounded-xl bg-white border border-slate-200 hover:border-green-700 hover:shadow-lg transition text-left"
                >
                  <div className="mb-4 text-green-700 text-3xl">✔</div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 bg-gradient-to-r from-green-700 to-green-800 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Build a Sustainable Future Together
          </h2>

          <p className="mb-10 text-green-100 text-lg">
            Get in touch to discuss your scrap material requirements.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-green-700 px-10 py-4 rounded-lg font-semibold hover:scale-105 transition shadow-lg"
          >
            Contact Us
          </a>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default About;
