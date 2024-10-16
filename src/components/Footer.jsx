const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white">
            VastuPrakara
          </a>

          {/* Navigation Links */}
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a
              href="#"
              className="text-sm hover:text-blue-400 transition duration-300"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-sm hover:text-blue-400 transition duration-300"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm hover:text-blue-400 transition duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm hover:text-blue-400 transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        <p className="text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} VastuPrakara. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
