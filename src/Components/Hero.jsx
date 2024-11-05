import "./Css/hero.css";

import { useTypewriter } from "react-simple-typewriter";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import NaofelBadshaResume from "../assets/NaofelBadsha.pdf";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Font End Designer", "& Basic MERN-stack Devloper"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);

  // data-aos="fade-left"
  // data-aos="fade-right"
  // https://i.ibb.co/RPMjG2J/removebg-preview.png
  return (
    <div className="flex items-center justify-center border-4 container m-auto min-h-screen px-2 py-20" id="home">
      <div className="flex items-center justify-between gap-12 flex-col lg:flex-row-reverse">
        {/*--------------Image-------------*/}
        <div className="flex-1 animationHomePage">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animationHomePage heroBackground w-full">
            <img
              src="https://i.ibb.co/RPMjG2J/removebg-preview.png"
              className="m-auto  flex items-center justify-center object-cover"
            />
          </div>
        </div>
        {/*--------------Text-------------*/}
        <div className="flex-1 mt-10">
          <h3 className="text-xl md:text-3xl lg:text-3xl text-black font-bold">
            Hi👋 there, I'm
          </h3>
          <h1 className="text-4xl md:text-5xl lg:text-5xl text-black font-bold py-5">
            Naofel{" "}
            <span className="text-4xl md:text-5xl lg:text-5xl text-deep-orange-600">
              Badsha
            </span>
          </h1>
          <h3 className="text-3xl md:text-4xl lg:text-4xl text-black font-bold">
            On a{" "}
            <span className="text-3xl md:text-4xl lg:text-4xl text-deep-orange-600">
              {text}
            </span>{" "}
          </h3>
          <p className="py-8 text-xl md:text-2xl lg:text-2xl text-blue-gray-500 font-medium">
            I'm from Dhaka, Bangladesh, I'm a Front End Web Developer, I'm
            especially focused on responsive design and love to build error-free
            websites, and I write my codes carefully and fresh.
          </p>
          <div>
            <div className="flex gap-5">
              <a href="https://www.facebook.com/profile.php?id=61550632539237">
                <i className="fa-brands fa-facebook text-4xl text-deep-orange-600 hover:-translate-y-2 duration-100 delay-100"></i>
              </a>
              <a href="https://x.com/NaofelMd25125">
                <i className="fa-brands fa-twitter text-4xl ml-3 text-deep-orange-600 hover:-translate-y-2 duration-100 delay-100"></i>
              </a>
              <a href="https://www.linkedin.com/in/md-naofel-badsha">
                <i className="fa-brands fa-linkedin text-4xl ml-3 text-deep-orange-600 hover:-translate-y-2 duration-100 delay-100"></i>
              </a>
              <a href="https://www.instagram.com/naofelbadsha007">
                <i className="fa-brands fa-instagram text-4xl ml-3 text-deep-orange-600 hover:-translate-y-2 duration-100 delay-100"></i>
              </a>
            </div>
          </div>
          <div className="py-10">
            {/*--------DownlodePDF------and------CVButton--------*/}
            <a href={NaofelBadshaResume} download="NaofelBadshaResume">
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

export default Hero;
