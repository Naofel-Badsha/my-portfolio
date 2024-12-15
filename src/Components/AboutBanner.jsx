import "./Css/AboutBanner.css";
const AboutBanner = () => {
  return (
    <div className="container m-auto px-2" id="about">
      <div className="flex items-center justify-center -z-50 gap-16 flex-col lg:flex-row">
        {/*------------Image-------------*/}
        <div className="animationAbout flex-1">
        {/* https://i.ibb.co.com/kHvYZ9x/Whats-App-Image-2024-12-15-at-1-08-26-PM-1.jpg
        https://i.ibb.co.com/TqG3vmY/Whats-App-Image-2024-12-15-at-1-08-26-PM.jpg */}
          <div className="w-full  ">
            <img
              src="https://i.ibb.co.com/gwwp3xm/about-12-removebg-preview.png"
              className="m-auto rounded-t-full w-full bg-gradient-to-r from-[#122025] via-deep-orange-700 to-[#23272b]"
            />
          </div>
        </div>

        {/*------------Text-------------*/}
        <div className="flex-1">
          <h3 className="text-4xl text-white font-medium md:font-bold lg:font-bold">About Me</h3>
          <h1 className="text-3xl md:text-5xl lg:text-5xl text-deep-orange-700 font-bold py-5">
            Font End Devloper
          </h1>
          <div>
            <p className="text-lg md:text-xl lg:text-2xl py-2 text-gray-500">
              I'am Professional Front end Dveloper, & and basic MARN Stack
              Devloper, I created web pages with UI/UX user interface , I have
             1 years of experience and many clients are width the projects
              carried out.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl py-2 text-gray-500">
              I love to deliver work to client's satisfaction, writing clean
              code is my passion.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-500">
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
            <a href="contact">
            
              <button className="btn border-0 text-lg md:text-xl lg:text-2xl bg-deep-orange-700 text-white hover:bg-[#122025] hover:border-[2px] rounded-md">
                Hire Me
                <i className="fa-solid fa-arrow-right ml-2 mt-1 text-white text-2xl"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;


{/* <div className="m-auto w-[320px] h-[320px] md:w-[520px] md:h-[520px] lg:w-[520px] lg:h-[520px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full">
<img
  src="https://i.ibb.co/RPMjG2J/removebg-preview.png"
  className="m-auto w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[500px] bg-gradient-to-r from-[#122025] via-deep-orange-700 to-[#23272b] rounded-full flex items-center justify-center object-cover"
/>
</div> */}
