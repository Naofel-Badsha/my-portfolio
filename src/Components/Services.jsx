import "./Css/Shadow.css";
const Services = () => {
  return (
    <div className="container m-auto px-2" id="services">
      {/*-----------Heading-----------*/}
      <div className="mt-16 lg:mt-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-medium text-white">
          My Services
        </h1>
        <div className="w-20 h-[3px] bg-deep-orange-700 m-auto mt-4"></div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-20">
        {/*-------------Services--------1---------*/}
        <div className="p-6 shadowOne rounded-lg shadow">
          <div className="text-center">
            <div className="flex items-center justify-center  bg-deep-orange-700 text-white  w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full m-auto">
              <i className="fa-solid fa-code text-white text-2xl md:text-2.5xl lg:text-3xl"></i>
            </div>
            <h1 className="text-4xl text-white font-medium md:font-bold lg:font-bold py-3 mt-3">Responsive</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-500 py-3 md:font-medium lg:font-medium">
              My focus is on delivering user-centric designs that provide an
              optimal viewing experience across and all devices.
            </p>
            <div className="py-5">
              <a href="contact">
                <button className="btn border-0 bg-deep-orange-700 text-white hover:bg-[#122025] hover:ml-2 text-lg md:text-xl lg:text-xl rounded-lg hover:rounded-bl-lg">
                  Seay Hello <i className="fa-solid fa-arrow-right mt-2"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        {/*-------------Services--------2---------*/}
        <div className="p-6 shadowOne rounded-lg shadow">
          <div className="text-center">
            <div className="flex items-center justify-center  bg-deep-orange-700 text-white w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full m-auto">
              <i className="fa-solid fa-laptop-code text-2xl md:text-2.5xl lg:text-3xl text-white"></i>
            </div>
            <h1 className="text-4xl text-white font-medium md:font-bold lg:font-bold py-3 mt-3">Front End</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-500 py-3 md:font-medium lg:font-medium">
              As a front-end designer, I specialize in transforming creative
              visions into engaging, interactive web experiences.
            </p>
            <div className="py-5">
              <a href="#contact">
                <button className="btn border-0 bg-deep-orange-700 text-white hover:bg-[#122025] hover:ml-2 text-lg md:text-xl lg:text-2xl rounded-lg hover:rounded-bl-lg">
                  Seay Hello <i className="fa-solid fa-arrow-right mt-2"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        {/*-------------Services--------3---------*/}
        <div className="p-6 shadowOne rounded-lg shadow">
          <div className="text-center">
            <div className="flex items-center justify-center  bg-deep-orange-700 text-white w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full m-auto">
              <i className="fa-solid fa-server text-2xl md:text-2.5xl lg:text-3xl text-white p-3"></i>
            </div>
            <h1 className="text-4xl text-white font-medium md:font-bold lg:font-bold py-3 mt-3">Back End</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-500 py-3 md:font-medium lg:font-medium">
              As a back-end designer, I specialize in building the robust
              foundations that power seamless web applications.
            </p>
            <div className="py-5">
              <a href="contact">
                <button className="btn border-0 bg-deep-orange-700 text-white hover:bg-[#122025] hover:ml-2 text-lg md:text-xl lg:text-2xl rounded-lg hover:rounded-bl-lg">
                  Seay Hello <i className="fa-solid fa-arrow-right mt-2"></i>
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
