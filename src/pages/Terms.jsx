import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

function TermsAndConditions() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Babji Inframet</title>
      </Helmet>

      <div className="w-full min-h-screen bg-slate-50">
        {/* Navbar */}
        <Navbar variant="solid" position="sticky" />

        {/* Content */}
        <main className="max-w-5xl mx-auto px-6 py-32 text-slate-700">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Terms and Conditions
          </h1>

          <p className="mb-8 text-sm text-slate-500">
            Last updated: November 14, 2024
          </p>

          <p className="mb-8">
            Please read these terms and conditions carefully before using our
            Service.
          </p>

          {/* Interpretation */}
          <h2 className="section-title">Interpretation and Definitions</h2>

          <h3 className="sub-title">Interpretation</h3>
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>

          <h3 className="sub-title">Definitions</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Affiliate</strong> means an entity that controls, is
              controlled by or is under common control with a party.
            </li>
            <li>
              <strong>Country</strong> refers to: Gujarat, India.
            </li>
            <li>
              <strong>Company</strong> refers to <strong>Babji Inframet</strong>
              .
            </li>
            <li>
              <strong>Device</strong> means any device that can access the
              Service.
            </li>
            <li>
              <strong>Service</strong> refers to the Website.
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
            <li>
              <strong>You</strong> means the individual or legal entity
              accessing the Service.
            </li>
          </ul>

          {/* Acknowledgment */}
          <h2 className="section-title">Acknowledgment</h2>
          <p>
            These Terms and Conditions govern the use of this Service and form
            the agreement between You and Babji Inframet. By accessing or using
            the Service, You agree to be bound by these Terms.
          </p>

          <p>
            You represent that you are over the age of 18. Babji Inframet does
            not permit those under 18 to use the Service.
          </p>

          <p>
            Your use of the Service is also subject to our Privacy Policy.
            Please read it carefully before using our Service.
          </p>

          {/* Links */}
          <h2 className="section-title">Links to Other Websites</h2>
          <p>
            Our Service may contain links to third-party websites. Babji
            Inframet assumes no responsibility for the content, privacy
            policies, or practices of any third-party services.
          </p>

          {/* Termination */}
          <h2 className="section-title">Termination</h2>
          <p>
            We may terminate or suspend Your access immediately, without prior
            notice, for any reason including violation of these Terms.
          </p>

          {/* Liability */}
          <h2 className="section-title">Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Babji Inframet shall not be
            liable for any indirect, incidental, or consequential damages
            arising from the use of the Service.
          </p>

          {/* Disclaimer */}
          <h2 className="section-title">
            "AS IS" and "AS AVAILABLE" Disclaimer
          </h2>
          <p>
            The Service is provided on an “AS IS” and “AS AVAILABLE” basis
            without warranties of any kind.
          </p>

          {/* Governing Law */}
          <h2 className="section-title">Governing Law</h2>
          <p>
            The laws of Gujarat, India shall govern these Terms and Your use of
            the Service.
          </p>

          {/* Disputes */}
          <h2 className="section-title">Dispute Resolution</h2>
          <p>
            If You have any concern or dispute, You agree to first resolve it by
            contacting Babji Inframet.
          </p>

          {/* Changes */}
          <h2 className="section-title">Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued
            use of the Service means acceptance of the revised Terms.
          </p>

          {/* Contact */}
          <h2 className="section-title">Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
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

export default TermsAndConditions;
