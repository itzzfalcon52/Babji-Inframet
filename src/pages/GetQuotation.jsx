import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//import { Helmet } from "react-helmet-async";

function GetQuotation() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendQuotation = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_QUOTATION_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        () => setStatus("error")
      );
  };

  return (
    <>
      <div className="w-full min-h-screen bg-slate-50">
        {/* Navbar */}
        <Navbar variant="solid" position="sticky" />

        {/* HEADER */}
        <section className="pt-36 pb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Get a Quotation
          </h1>

          <div className="mt-4 flex justify-center">
            <span className="h-1 w-24 bg-green-700 rounded-full" />
          </div>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Share your requirements and our team will get back to you with a
            competitive quotation.
          </p>
        </section>

        {/* FORM SECTION */}
        <section className="pb-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <form
                ref={formRef}
                onSubmit={sendQuotation}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Full Name */}
                <input
                  name="name"
                  placeholder="Full Name"
                  required
                  className="md:col-span-2 input"
                />

                {/* Company */}
                <input
                  name="company"
                  placeholder="Company Name"
                  className="md:col-span-2 input"
                />

                {/* Email */}
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="input"
                />

                {/* Phone */}
                <input
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="input"
                />

                {/* Material */}
                <input
                  name="material"
                  placeholder="Material Required (e.g. SS, Aluminium, Copper)"
                  required
                  className="md:col-span-2 input"
                />

                {/* Quantity */}
                <input
                  name="quantity"
                  placeholder="Approximate Quantity (MT / KG)"
                  required
                  className="input"
                />

                {/* Preferred Time */}
                <input
                  name="contact_time"
                  placeholder="Preferred Time to Connect"
                  className="input"
                />

                {/* Message */}
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Additional Details / Message"
                  className="md:col-span-2 input"
                />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="md:col-span-2 bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
                >
                  {status === "sending"
                    ? "Submitting..."
                    : "Submit Quotation Request"}
                </button>

                {status === "success" && (
                  <p className="md:col-span-2 text-green-700 text-center font-medium">
                    Your quotation request has been sent successfully.
                  </p>
                )}

                {status === "error" && (
                  <p className="md:col-span-2 text-red-600 text-center font-medium">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>

              {/* WhatsApp CTA */}
              <div className="mt-10 text-center">
                <p className="text-slate-600 mb-4">
                  For urgent queries, chat with us directly
                </p>

                <a
                  href="https://wa.me/919898761755?text=Hello%20Babji%20Inframet,%20I%20would%20like%20to%20get%20a%20quotation%20for%20scrap%20materials."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default GetQuotation;
