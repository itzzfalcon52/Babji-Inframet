import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

function ContactPage() {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          setShowModal(true);
          formRef.current.reset();
        },
        () => setStatus("error")
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Babji Inframet</title>
      </Helmet>

      <div className="w-full min-h-screen bg-slate-50">
        <Navbar variant="solid" position="sticky" />

        {/* Header */}
        <section className="pt-36 pb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Contact Us
          </h1>
          <div className="mt-4 flex justify-center">
            <span className="h-1 w-24 bg-green-700 rounded-full" />
          </div>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Reach out to Babji Inframet for reliable scrap material solutions.
          </p>
        </section>

        {/* Content */}
        <section className="pb-24 p-2 rounded-full hover:bg-slate-100 transition">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
            {/* FORM */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10  hover:bg-slate-100 transition">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                Send Us an Inquiry
              </h2>

              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <input
                  name="name"
                  placeholder="Full Name"
                  required
                  className="md:col-span-2 input"
                />
                <input
                  name="company"
                  placeholder="Company Name"
                  className="md:col-span-2 input"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="input"
                />
                <input
                  name="phone"
                  placeholder="Phone Number"
                  className="input"
                />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                  className="md:col-span-2 input"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="md:col-span-2 bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
                >
                  {status === "sending" ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            </div>

            {/* COMPANY INFO */}
            <div className="space-y-10 p-2 rounded-full hover:bg-slate-100 transition">
              {/* Address */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Babji Inframet Pvt. Ltd.
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Plot No. 356, GIDC POR,
                  <br />
                  Raman Gamdi,
                  <br />
                  Vadodara, Gujarat – 391243
                </p>
                <p className="mt-4">
                  📧{" "}
                  <a
                    href="mailto:scrap@babjiinframet.com"
                    className="text-green-700 font-medium"
                  >
                    scrap@babjiinframet.com
                  </a>
                </p>
              </div>

              {/* WhatsApp Auto-Fill */}
              <div className="bg-white rounded-2xl shadow-lg p-8  hover:bg-slate-100 transition">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Quick Chat
                </h3>
                <a
                  href="https://wa.me/919898761755?text=Hello%20Babji%20Inframet,%20I%20would%20like%20to%20enquire%20about%20scrap%20materials."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SUCCESS MODAL */}
        {showModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 max-w-md text-center shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Inquiry Sent Successfully!
              </h3>
              <p className="text-slate-600 mb-6">
                Thank you for contacting Babji Inframet. Our team will reach out
                to you shortly.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
}

export default ContactPage;
