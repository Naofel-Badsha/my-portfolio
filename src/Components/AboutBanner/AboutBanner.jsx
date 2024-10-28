import "../AboutBanner/AboutBanner.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutBanner = () => {
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);

  return (
    <div className="container m-auto">
      <div className="flex items-center justify-between gap-10 flex-col lg:flex-row-reverse">
        <div className="flex-1" data-aos="fade-left">
          <div className="py-20 animationAbout">
            <img
              src="https://i.ibb.co/RPMjG2J/removebg-preview.png"
              className=" w-full h-[850px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-b-full  object-cover"
            />
          </div>
        </div>

        <div className="flex-1" data-aos="fade-right">
          <h3 className="text-4xl text-black font-bold">About Me</h3>
          <h1 className="text-3xl md:text-5xl lg:text-5xl text-deep-orange-600 font-bold py-5">
            Font End Devloper
          </h1>
          <div className="">
            <p className="md:text-2xl lg:text-2xl py-2 text-black text-justify">
              I'am Professional Front end Dveloper, & and basic MARN Stack
              Devloper, I created web pages with UI/UX user interface , I have
              years of experience and many clients are width the projects
              carried out.
            </p>
            <p className="md:text-2xl lg:text-2xl py-2 text-black text-justify">
              I love to deliver work to client's satisfaction, writing clean
              code is my passion.
            </p>
            <p className="md:text-2xl lg:text-2xl text-black text-justify">
              I always focus more on responsive design. Because I think
              currently 80% of website users view through their mobiles. This is
              why I give more priority to Responsive Design than the elegant
              design of User Interface. So that every client and user can see
              the website I have created without any barriers on all devices
              Also I love to use my creativity and make something new.
            </p>
          </div>
          <div className="py-10">
            {/*--------DownlodePDF------and------CVButton--------*/}
            <a href="NaofelBadsha.pdf" download="NaofelBadsha.pdf">
              <button className=" lg:text-xl sm:text-xl text-xl py-3 px-5 bg-deep-orange-600 text-white rounded-md">
                Download Cv{" "}
                <i className="fa-solid fa-file-arrow-down ml-2 text-white text-2xl"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
