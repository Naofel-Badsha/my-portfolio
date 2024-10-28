import "../Hero/Hero.css";
import HoneImage from "../../../public/img/person-3.png";
import { useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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

  return (
    <div>
      <div className="hero min-h-screen container m-auto">
        <div className="flex items-center justify-between gap-12 flex-col lg:flex-row-reverse">
          {/*--------------Image-------------*/}
          <div className="flex-1" data-aos="fade-left">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animationHomePage heroBackground w-full">
              <img src={HoneImage} className="m-auto"/>
            </div>
          </div>
          {/*--------------Text-------------*/}
          <div className="flex-1" data-aos="fade-right">
            <h3 className="text-xl md:text-3xl lg:text-3xl text-black font-bold">
              Hello, My Name Is
            </h3>
            <h1 className="text-4xl md:text-5xl lg:text-7xl text-black font-bold py-5">
              Naofel{" "}
              <span className="text-4xl md:text-5xl lg:text-7xl text-deep-orange-600">
                Badsha
              </span>
            </h1>
            <h3 className="text-3xl md:text-4xl lg:text-4xl text-black font-bold">
              On a{" "}
              <span className="text-3xl md:text-4xl lg:text-4xl text-deep-orange-600">
                {text}
              </span>{" "}
            </h3>
            <p className="py-8 text-xl md:text-2xl lg:text-2xl text-black text-justify">
              I'm from Dhaka, Bangladesh, I'm a Front End Web Developer, I'm
              especially focused on responsive design and love to build
              error-free websites, and I write my codes carefully and fresh.
            </p>
            <div>
              <div className="flex gap-5">
                <Link to="https://www.facebook.com/profile.php?id=61550632539237">
                  <i className="fa-brands fa-facebook text-4xl text-deep-orange-600 hover:-translate-y-2 duration-100 delay-100"></i>
                </Link>
                <Link to="https://x.com/NaofelMd25125">
                  <i className="fa-brands fa-twitter text-4xl ml-3 text-deep-orange-600 hover:-translate-y-2 duration-100 delay-100"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/md-naofel-badsha">
                  <i className="fa-brands fa-linkedin text-4xl ml-3 text-deep-orange-600 hover:-translate-y-2 duration-100 delay-100"></i>
                </Link>
                <Link to="https://www.instagram.com/naofelbadsha007">
                  <i className="fa-brands fa-instagram text-4xl ml-3 text-deep-orange-600 hover:-translate-y-2 duration-100 delay-100"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
