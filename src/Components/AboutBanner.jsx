import "./Css/AboutBanner.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutBanner = () => {
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);

  // data-aos="fade-right"
  // data-aos="fade-left"

  return (
    <div className="hero min-h-screen container m-auto px-2" id="about">
      <div className="flex -z-50  items-center justify-between gap-10 flex-col lg:flex-row">
        {/*------------Image-------------*/}
        <div className="flex-1">
          <div className="py-20 animationAbout">
            <img
              src="https://i.ibb.co/RPMjG2J/removebg-preview.png"
              className="w-full h-[850px] rounded-tr-[400px] rounded-tl-[400px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   object-cover"
            />
          </div>
        </div>

        {/*------------Text-------------*/}
        <div className="flex-1">
          <h3 className="text-4xl text-black font-bold">About Me</h3>
          <h1 className="text-3xl md:text-5xl lg:text-5xl text-deep-orange-600 font-bold py-5">
            Font End Devloper
          </h1>
          <div className="">
            <p className="text-xl md:text-2xl lg:text-2xl py-2 text-blue-gray-500 font-medium">
              I'am Professional Front end Dveloper, & and basic MARN Stack
              Devloper, I created web pages with UI/UX user interface , I have
              years of experience and many clients are width the projects
              carried out.
            </p>
            <p className="text-xl md:text-2xl lg:text-2xl py-2 text-blue-gray-500 font-medium">
              I love to deliver work to client's satisfaction, writing clean
              code is my passion.
            </p>
            <p className="text-xl md:text-2xl lg:text-2xl text-blue-gray-500 font-medium">
              I always focus more on responsive design. Because I think
              currently 80% of website users view through their mobiles. This is
              why I give more priority to Responsive Design than the elegant
              design of User Interface. So that every client and user can see
              the website I have created without any barriers on all devices
              Also I love to use my creativity and make something new.
            </p>
          </div>
          <div className="py-10">
            <a href="#">
              <button className="flex lg:text-xl sm:text-xl text-xl btn bg-deep-orange-600 border-0 text-white rounded-md">
                Hire Me
                <i className="fa-solid fa-arrow-right ml-2 text-white text-2xl"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
