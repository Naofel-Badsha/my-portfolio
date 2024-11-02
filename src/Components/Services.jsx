
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    AOS.init({duration: "2000"}) 
  },[])
  return (
    <div className="container m-auto" id='services'>
      {/*-----------Heading-----------*/}
      <div className="mt-16">
        <h1 className="text-3xl md:text-4xl lg:text-7xl text-center text-black">
          My Services
        </h1>
        <div className="w-40 h-[2px] bg-deep-orange-600 m-auto mt-2"></div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-20">
        {/*-------------Services--------1---------*/}
        <div className="p-6 bg-white border border-deep-orange-700 rounded-lg shadow" data-aos="fade-right">
          <div className="text-center">
            <div className="flex items-center justify-center w-20 h-20 rounded-full m-auto bg-deep-orange-600">
              <i className="fa-solid fa-code text-4xl text-white"></i>
            </div>
            <h1 className="text-4xl text-black font-bold py-3">Responsive</h1>
            <p className="text-xl text-black py-3">
              My focus is on delivering user-centric designs that provide an
              optimal viewing experience across and all devices.
            </p>
            <div className="py-5">
              <a href=''>
                <button className="bg-deep-orange-600 hover:bg-black hover:text-white hover:ml-2 duration-200 delay-100 py-3 px-6 text-xl text-white rounded-lg hover:rounded-bl-lg ">
                  Seay Hello <i className="fa-solid fa-arrow-right"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        {/*-------------Services--------2---------*/}
        <div className="p-6 bg-white border border-deep-orange-700 rounded-lg shadow" data-aos="fade-up">
          <div className="text-center">
            <div className="flex items-center justify-center w-20 h-20 rounded-full m-auto bg-deep-orange-600">
              <i className="fa-solid fa-laptop-code text-4xl text-white"></i>
            </div>
            <h1 className="text-4xl text-black font-bold py-3">Front End</h1>
            <p className="text-xl text-black py-3">
              As a front-end designer, I specialize in transforming creative
              visions into engaging, interactive web experiences.
            </p>
            <div className="py-5">
              <a href=''>
                <button className="bg-deep-orange-600 hover:bg-black hover:text-white hover:ml-2 duration-200 delay-100 py-3 px-6 text-xl text-white rounded-lg hover:rounded-bl-lg ">
                  Seay Hello <i className="fa-solid fa-arrow-right"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        {/*-------------Services--------3---------*/}
        <div className="p-6 bg-white border border-deep-orange-700 rounded-lg shadow" data-aos="fade-left">
          <div className="text-center">
            <div className="flex items-center justify-center w-20 h-20 rounded-full m-auto bg-deep-orange-600">
              <i className="fa-solid fa-server text-4xl text-white"></i>
            </div>
            <h1 className="text-4xl text-black font-bold py-3">Back End</h1>
            <p className="text-xl text-black py-3">
              As a back-end designer, I specialize in building the robust
              foundations that power seamless web applications.
            </p>
            <div className="py-5">
              <a  href=''>
                <button className="bg-deep-orange-600 hover:bg-black hover:text-white hover:ml-2 duration-200 delay-100 py-3 px-6 text-xl text-white rounded-lg hover:rounded-bl-lg ">
                  Seay Hello <i className="fa-solid fa-arrow-right"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
