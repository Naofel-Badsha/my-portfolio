import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //--------Set------Togglt------Menu-------
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  //---------Nav-------Items--------
  const navItems = [
    { id: 1, title: "Home", link: "home" },
    { id: 2, title: "About", link: "about" },
    { id: 3, title: "Services", link: "services" },
    { id: 4, title: "Skills", link: "skills" },
    { id: 5, title: "Portfolio", link: "portfolio" },
    { id: 6, title: "Contact", link: "contact" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`z-50 py-4 lg:px-14 px-4 text-whibg-white${
          isSticky
            ? "sticky  top-0 left-0 right-0 border-b border-black bg-[#122025] text-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center container m-auto ">
          {/*---------Logo----------*/}
          <a>
            <span className="text-black text-2xl md:text-3xl lg:text-3xl font-medium md:font-bold lg:font-bold">Badsha</span>
          </a>
          {/*---------Nav-------Items--------*/}
          <ul className="lg:flex space-x-6 hidden">
            {navItems.map(({ id, title, link }) => (
              <li
                className="block cursor-pointer text-2xl font-medium  hover:text-deep-orange-600 focus:text-deep-orange-600"
                key={id}
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          {/*-------Button--------Github------*/}
          <div className="space-x-6 ">
            <a href="https://github.com/Naofel-Badsha">
              <button className="btn bg-deep-orange-600 border-0 text-xlmd:text-2xl lg:text-2xl text-white hover:bg-[#23272b]">
                GitHub
              </button>
            </a>
          </div>
          {/*--------Menu-----Bars------*/}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="focus:text-deep-orange-600">
              {isMenuOpen ? (
                <IoClose className="text-4xl text-text-white" />
              ) : (
                <FaBars className="text-3xl text-text-white" />
              )}
            </button>
          </div>
        </div>
        {/*--------Nav----Items--for---Mobial---Device------*/}
        <div
          className={`space-y-4 px-4 mt-20 py-7 bg-gray-200  lg:hidden ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ id, title, link }) => (
            <li
              className="block cursor-pointer text-2xl font-medium text-black hover:text-deep-orange-600 focus:text-deep-orange-600"
              key={id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

