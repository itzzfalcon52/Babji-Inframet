import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t-4 border-green-700">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP GRID */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          {/* COMPANY INFO */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo-1.png"
                alt="Babji Inframet"
                className="h-14 w-14"
              />
              <span className="text-white text-xl font-semibold">
                BABJI INFRAMET
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed">
              Trusted leader in ferrous and non-ferrous scrap materials,
              delivering quality, reliability, and sustainable solutions across
              India and global markets.
            </p>

            {/* Socials */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/company/babji-inframet"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/socials/linkedin.png"
                  alt="LinkedIn"
                  className="h-6 w-6 hover:scale-110 transition"
                />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <img
                  src="/socials/twitter.png"
                  alt="Twitter"
                  className="h-6 w-6 hover:scale-110 transition"
                />
              </a>
              <a
                href="https://wa.me/919898761755?text=Hello%20Babji%20Inframet,%20I%20would%20like%20to%20enquire%20about%20scrap%20materials."
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/socials/whatsapp.png"
                  alt="WhatsApp"
                  className="h-6 w-6 hover:scale-110 transition"
                />
              </a>
            </div>
          </div>

          {/* NAV LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="hover:text-green-400">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us" className="hover:text-green-400">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className="hover:text-green-400">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-green-400">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms" className="hover:text-green-400">
                  Terms & Conditions
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacy-policy" className="hover:text-green-400">
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>

          {/* CONTACT PERSONS */}
          <div>
            <h4 className="text-white font-semibold mb-6">Key Contacts</h4>

            <ul className="space-y-6 text-sm">
              <li>
                <p className="font-semibold text-white">Adnan Barodawala</p>
                <p className="text-slate-400">Founder / CEO</p>
                <p>📞 +91 9924306621</p>
                <p>✉ adnan.barodawala@babjienterprises.com</p>
              </li>

              <li>
                <p className="font-semibold text-white">Murtaza Barodawala</p>
                <p className="text-slate-400">Global SS Scrap Specialist</p>
                <p>📞 +91 9898761755</p>
                <p>✉ murtuza.barodawala@babjienterprises.com</p>
              </li>
            </ul>
          </div>

          {/* MORE CONTACTS */}
          <div>
            <h4 className="text-white font-semibold mb-6 invisible md:visible">
              Contacts
            </h4>

            <ul className="space-y-6 text-sm">
              <li>
                <p className="font-semibold text-white">Hatim Chopadawala</p>
                <p className="text-slate-400">
                  International SS Trading Manager
                </p>
                <p>✉ hatim.chopadawala@babjienterprises.com</p>
              </li>

              <li>
                <p className="font-semibold text-white">Prakash Gupta</p>
                <p className="text-slate-400">CRGO Sales Executive</p>
                <p>✉ prakash.gupta@babjienterprises.com</p>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} Babji Inframet. All rights reserved.
          </p>
          <p className="mt-2">Terms and conditions apply.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
