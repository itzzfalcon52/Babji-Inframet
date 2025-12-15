function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-8 py-4 ">
      <div className="flex items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3 ">
          <img
            src="/logo-1.png"
            alt="Babji Enterprises"
            className="h-16 w-16"
          />
          <span className="text-white font-semibold text-2xl">
            BABJI INFRAMET
          </span>
        </div>

        {/* Nav Links */}
        <div className=" flex items-center justify-around w-full text-white font-medium">
          <a href="#" className="hover:text-green-400">
            Home
          </a>
          <a href="#" className="hover:text-green-400">
            About Us
          </a>
          <a href="#" className="hover:text-green-400">
            Our Products
          </a>
          <a
            href="#"
            className="hover:text-black bg-green-500 p-2 rounded-md  "
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
