import "./Css/hero.css";
import { useTypewriter } from "react-simple-typewriter";
import NaofelBadshaResume from "../assets/NaofelBadsha.pdf";
const Hero = () => {
  const [text] = useTypewriter({
    words: ["Font End Designer", "& Basic MERN-stack Devloper"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  // bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
  // bg-gradient-to-r from-[#122025] via-deep-orange-600 to-[#23272b] heroBackground
  return (
    <div className="flex items-center justify-center container m-auto min-h-screen py-20" id="home">
      <div className="flex items-center justify-between gap-12 flex-col lg:flex-row-reverse">
        {/*--------------Image-------------*/}
        <div className="flex-1 animationHomePage" data-aos="fade-left">
          <div className="m-auto w-[320px] h-[320px] md:w-[520px] md:h-[520px] lg:w-[520px] lg:h-[520px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animationHomePage">
            <img
              src="https://i.ibb.co.com/m5kfBsS/profile-7-removebg-preview.png"
              className="m-auto w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[500px] bg-gradient-to-r from-[#122025] via-deep-orange-600 to-[#23272b] rounded-full flex items-center justify-center object-cover"
            />
          </div>
        </div>
        {/*--------------Text-------------*/}
        <div className="flex-1 mt-10 px-2" data-aos="fade-right">
          <h3 className="text-xl md:text-3xl lg:text-3xl text-white font-bold">
            Hi👋 there, I'm
          </h3>
          <h1 className="text-4xl md:text-5xl lg:text-5xl text-white font-bold py-5">
            Naofel{" "}
            <span className="text-4xl md:text-5xl lg:text-5xl text-deep-orange-00">
              Badsha
            </span>
          </h1>
          <h3 className="text-3xl md:text-4xl lg:text-4xl text-white font-bold">
            On a{" "}
            <span className="text-3xl md:text-4xl lg:text-4xl text-deep-orange-600">
              {text}
            </span>{" "}
          </h3>
          <p className="py-8 text-lg md:text-2xl lg:text-2xl text-gray-500">
            I'm from Dhaka, Bangladesh, I'm a Front End Web Developer, I'm
            especially focused on responsive design and love to build error-free
            websites, and I write my codes carefully and fresh.
          </p>
          <div>
            <div className="flex gap-5">
              <a href="https://www.facebook.com/profile.php?id=61550632539237">
                <i className="fa-brands fa-facebook text-3xl md:text-4xl lg:text-4xl text-deep-orange-600 hover:text-white hover:-translate-y-2 duration-75 delay-100"></i>
              </a>
              <a href="https://x.com/NaofelMd25125">
                <i className="fa-brands fa-twitter text-3xl md:text-4xl lg:text-4xl ml-3 text-deep-orange-600 hover:text-white hover:-translate-y-2 duration-75 delay-100"></i>
              </a>
              <a href="https://www.linkedin.com/in/md-naofel-badsha">
                <i className="fa-brands fa-linkedin text-3xl md:text-4xl lg:text-4xl ml-3 text-deep-orange-600 hover:text-white hover:-translate-y-2 duration-75 delay-100"></i>
              </a>
              <a href="https://www.instagram.com/naofelbadsha007">
                <i className="fa-brands fa-instagram text-3xl md:text-4xl lg:text-4xl ml-3 text-deep-orange-600 hover:text-white hover:-translate-y-2 duration-75 delay-100"></i>
              </a>
            </div>
          </div>
          <div className="py-10">
            {/*--------DownlodePDF------and------CVButton--------*/}
            <a href={NaofelBadshaResume} download="NaofelBadshaResume">
              <button className="btn border-0 text-xl md:text-2xl lg:text-2xl bg-deep-orange-600 hover:bg-[#122025] text-white rounded-md">
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
