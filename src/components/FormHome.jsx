import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function FormHome() {
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
      .then(() => {
        setStatus("success");
        setShowModal(true);
        formRef.current.reset();

        setTimeout(() => {
          setShowModal(false);
          setStatus("");
        }, 4000);
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section className="relative w-full md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video (Desktop only) */}
      <video
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        src="/output.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="/video-poster.jpg"
      />

      {/* Mobile fallback */}
      <div className="absolute inset-0 bg-[url('/video-poster.jpg')] bg-cover bg-center md:hidden" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Form Card */}
      <div className="relative z-10 w-full md:max-w-4xl bg-white/95 backdrop-blur-md md:rounded-2xl shadow-2xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
          Send Us Your Inquiry
        </h2>

        <p className="text-slate-600 text-center mb-10">
          Looking for reliable scrap material solutions? Fill out the form and
          our team will get back to you shortly.
        </p>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            name="name"
            required
            placeholder="Full Name"
            className="md:col-span-2 border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-700"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Email Address"
            className="border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-700"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            className="border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-700"
          />

          <input
            name="company"
            placeholder="Company Name"
            className="md:col-span-2 border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-700"
          />

          <textarea
            name="message"
            required
            rows="4"
            placeholder="Your Message"
            className="md:col-span-2 border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-700"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="md:col-span-2 bg-green-700 hover:bg-green-800 text-white text-lg font-semibold py-3 rounded-lg transition disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Submit Inquiry"}
          </button>

          {status === "error" && (
            <p className="md:col-span-2 text-red-600 text-center font-medium">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>

      {/* SUCCESS MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setShowModal(false)}
          />

          {/* Modal */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 text-center z-10 animate-fadeIn">
            <div className="mx-auto mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
              <svg
                className="w-8 h-8 text-green-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Inquiry Sent Successfully
            </h3>

            <p className="text-slate-600 mb-6">
              Thank you for contacting Babji Inframet. Our team will reach out
              to you shortly.
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default FormHome;
