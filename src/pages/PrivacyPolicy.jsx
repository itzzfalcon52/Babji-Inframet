import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Babji Inframet</title>
      </Helmet>
      <div className="w-full min-h-screen bg-slate-50">
        {/* Navbar */}
        <Navbar variant="solid" position="sticky" />

        {/* Content */}
        <main className="max-w-5xl mx-auto px-6 py-32 text-slate-700">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Privacy Policy
          </h1>

          <p className="mb-8 text-sm text-slate-500">
            Last updated: November 14, 2024
          </p>

          <p className="mb-8">
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You.
          </p>

          <p className="mb-8">
            By using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy.
          </p>

          {/* Interpretation */}
          <h2 className="section-title">Interpretation and Definitions</h2>

          <h3 className="sub-title">Interpretation</h3>
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions, regardless of whether they
            appear in singular or plural.
          </p>

          <h3 className="sub-title">Definitions</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Account</strong> means a unique account created for You to
              access our Service.
            </li>
            <li>
              <strong>Affiliate</strong> means an entity under common control
              with the Company.
            </li>
            <li>
              <strong>Company</strong> refers to <strong>Babji Inframet</strong>
              .
            </li>
            <li>
              <strong>Cookies</strong> are small files placed on Your device to
              track browsing history.
            </li>
            <li>
              <strong>Country</strong> refers to Gujarat, India.
            </li>
            <li>
              <strong>Device</strong> means any device used to access the
              Service.
            </li>
            <li>
              <strong>Personal Data</strong> means any information that
              identifies an individual.
            </li>
            <li>
              <strong>Website</strong> refers to{" "}
              <a
                href="https://babjiinframet.com"
                className="text-green-700 underline"
              >
                https://babjiinframet.com
              </a>
            </li>
          </ul>

          {/* Data Collection */}
          <h2 className="section-title">
            Collecting and Using Your Personal Data
          </h2>

          <h3 className="sub-title">Types of Data Collected</h3>

          <h4 className="font-semibold text-slate-800 mt-4 mb-2">
            Personal Data
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Address, City, State, ZIP/Postal code</li>
            <li>Usage Data</li>
          </ul>

          <h4 className="font-semibold text-slate-800 mt-6 mb-2">Usage Data</h4>
          <p>
            Usage Data is collected automatically and may include IP address,
            browser type, pages visited, time spent, and diagnostic data.
          </p>

          {/* Cookies */}
          <h2 className="section-title">Tracking Technologies and Cookies</h2>
          <p>
            We use Cookies and similar technologies to track activity and
            improve our Service. Cookies may be session-based or persistent.
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Necessary / Essential Cookies</li>
            <li>Cookies Policy Acceptance Cookies</li>
            <li>Functionality Cookies</li>
          </ul>

          {/* Use of Data */}
          <h2 className="section-title">Use of Your Personal Data</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and maintain the Service</li>
            <li>To manage Your account</li>
            <li>To contact You regarding inquiries or services</li>
            <li>To provide offers and updates (unless opted out)</li>
            <li>To comply with legal obligations</li>
          </ul>

          {/* Retention */}
          <h2 className="section-title">Retention of Your Personal Data</h2>
          <p>
            Babji Inframet will retain Personal Data only as long as necessary
            to fulfill the purposes outlined in this Privacy Policy.
          </p>

          {/* Transfer */}
          <h2 className="section-title">Transfer of Your Personal Data</h2>
          <p>
            Your data may be transferred and stored outside your jurisdiction.
            By submitting your data, you consent to this transfer.
          </p>

          {/* Deletion */}
          <h2 className="section-title">Delete Your Personal Data</h2>
          <p>
            You may request deletion or correction of your Personal Data by
            contacting us directly.
          </p>

          {/* Security */}
          <h2 className="section-title">Security of Your Personal Data</h2>
          <p>
            While we take reasonable steps to protect your data, no method of
            transmission over the Internet is 100% secure.
          </p>

          {/* Children */}
          <h2 className="section-title">Children's Privacy</h2>
          <p>
            Our Service does not address anyone under the age of 13. We do not
            knowingly collect data from children.
          </p>

          {/* External Links */}
          <h2 className="section-title">Links to Other Websites</h2>
          <p>
            We are not responsible for third-party websites linked from our
            Service.
          </p>

          {/* Updates */}
          <h2 className="section-title">Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page.
          </p>

          {/* Contact */}
          <h2 className="section-title">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, you can contact
            us at:
          </p>
          <p className="mt-2">
            <a
              href="https://babjiinframet.com/contact"
              className="text-green-700 font-medium underline"
            >
              https://babjiinframet.com/contact
            </a>
          </p>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default PrivacyPolicy;
