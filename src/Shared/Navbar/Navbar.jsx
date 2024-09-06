import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navlink = (
    <>
      <li>
        <NavLink className="ml-3 text-2xl font-normal" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="ml-3 text-2xl font-normal" to="/About">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="ml-3 text-2xl font-normal" to="/contactMe">
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar sticky inset-0 z-10  w-full max-w-full rounded-none border  bg-opacity-30 py-2 px-4 text-black shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-2 lg:py-2">
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
    </div>
  );
};

export default Navbar;
