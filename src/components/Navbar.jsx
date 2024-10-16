// import { RiCloseLine, RiMenu3Line } from "@remixicon/react"; // Import both icons

// import { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <nav className="border-b-2">
//       <div className="max-w-7xl mx-auto  flex justify-between items-center py-8">
//         <div className="pl-2">
//           <a href="#">
//             <h2 className="text-2xl font-bold">VastuPrakara</h2>
//           </a>
//         </div>
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-2xl pr-2 focus:outline-none"
//             aria-label={isOpen ? "Close menu" : "Open menu"}
//           >
//             {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
//           </button>
//         </div>
//         <div className="hidden md:flex space-x-8 md:space-x-4 pr-2" >
//           {LINKS.map{(link, index) => {
//             <a key={index} href="link.link" className="uppercase text-sm font-medium ">{link.name}</a>
//           }}}
//         </div>
//       </div>
//       <div className={`${

//      isOpen ? "block" : "hidden" } md:hidden absolute bg-neutral-50 w-full py-5 px-4 border-b-4`} >
//       {LINKS.map((link, index) => {
//         <a key={index} href={link.link} className="uppercase text-lg font-medium block py-2 tracking-wide" >{link.name}</a>
//       })}
//      </div>
//     </nav>
//   );
// };
// export default Navbar;

import { RiCloseLine, RiMenu3Line } from "@remixicon/react"; // Import both icons
import { useState } from "react";

const LINKS = [
  { name: "Home", link: "#home" },
  { name: "Services", link: "#services" },
  { name: "About", link: "#about" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-8">
        <div className="pl-2">
          <a href="#">
            <h2 className="text-2xl font-bold">VastuPrakara</h2>
          </a>
        </div>
        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl pr-2 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="uppercase text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute bg-neutral-50 w-full py-5 px-4 border-b-4`}
      >
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.link}
            className="uppercase text-lg font-medium block py-2 tracking-wide"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
