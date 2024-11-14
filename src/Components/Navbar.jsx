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
        className={`z-50 py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky  top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center">
          {/*---------Logo----------*/}
          <a>
            <span className="text-black text-3xl font-bold ">N.B</span>
          </a>
          {/*---------Nav-------Items--------*/}
          <ul className="lg:flex space-x-6 hidden">
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
          </ul>
          {/*-------Button--------Github------*/}
          <div className="space-x-6 ">
            <a href="https://github.com/Naofel-Badsha">
              <button className="btn bg-deep-orange-600 border-0 text-2xl text-white">
                GitHub
              </button>
            </a>
          </div>
          {/*--------Menu-----Bars------*/}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="focus:text-deep-orange-600">
              {isMenuOpen ? (
                <IoClose className="text-4xl text-black" />
              ) : (
                <FaBars className="text-3xl text-black" />
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

{
  /* <div className="navbar sticky inset-0 z-10  w-full max-w-full rounded-none border  bg-opacity-30 py-2 px-4 text-black shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-2 lg:py-2">
<div className="container m-auto">
  <div className="navbar ">
    <div className="navbar-start">
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-6"
        >
          {navlink}
        </ul>
      </div>
      <a className="text-black text-3xl font-bold">N.Badsha</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 gap-6">{navlink}</ul>
    </div>
    <div className="navbar-end">
      <Link to="https://github.com/Naofel-Badsha">
        <button className="btn bg-deep-orange-600 border-0 text-2xl text-white">
          {" "}
          <i className="fa-brands fa-github text-4xl text-white  ml-3 hover:translate-x-1 duration-100 delay-100"></i>{" "}
          GitHub
        </button>
      </Link>
    </div>
  </div>
</div>
</div> */
}
