import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContactMe = () => {
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);

  // data-aos="fade-right"
  // data-aos="fade-left"

  return (
    <div className="container m-auto px-2" id="contact">
      {/*-----------Heading-----------*/}
      <div className="py-16 mt-16 mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-black">
          Contact Me
        </h1>
        <div className="w-20 h-[2px] bg-deep-orange-600 m-auto mt-2"></div>
      </div>

      <div className="flex justify-between gap-10 flex-col lg:flex-row">
        {/*----------Img-------And----Artical--------*/}
        <div className="flex-1">
          {/*----------Img---------------*/}
          <div className="">
            <img
              src="https://i.ibb.co/PWms5Gp/How-to-prepare-for-job-interview.jpg"
              className="rounded-lg"
            />
          </div>
          {/*--------------Artical------------*/}
          <div>
            <div className="py-7">
              <h1 className="text-3xl md:text-4xl lg:text-4xl text-black py-3">
                Naofel Badsha
              </h1>
              <h3 className="text-xl md:text-2xl lg:text-2xl  py-2 text-blue-gray-500 font-medium">
                Professional Front end Developer, & and basic{" "}
                <small className="text-2xl text-deep-orange-600 font-bold">
                  MARN Stack
                </small>{" "}
                Developer.
              </h3>
              <h4 className="text-xl md:text-2xl lg:text-2xl py-2 text-blue-gray-500 font-medium">
                Are You Looking For Your Business Online Presence? I am here.
              </h4>
            </div>
            {/*--------Social-------Contact--------*/}
            <div className="flex justify-between flex-wrap">
              <div>
                {/*-------Card-------1-----*/}
                <div className="flex gap-3 py-3">
                  <i className="fa-solid fa-location-dot text-3xl text-deep-orange-600"></i>
                  <div>
                    <h2 className="text-xl md:text-3xl lg:text-3xl text-black font-bold">
                      Address
                    </h2>
                    <p className="md:text-xl lg:text-xl mt-2 text-blue-gray-500 font-medium">
                      Gulistan, Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
                {/*-------Card-------2-----*/}
                <div className="flex gap-3 py-3">
                  <i className="fa-solid fa-envelope text-3xl text-deep-orange-600"></i>
                  <div>
                    <h2 className="text-xl md:text-3xl lg:text-3xl text-black font-bold">
                      Email
                    </h2>
                    <p className="md:text-xl lg:text-xl mt-2 text-blue-gray-500 font-medium">
                      naofelbadsha@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div>
                {/*-------Card-------3-----*/}
                <div className="flex gap-3 py-3">
                  <i className="fa-brands fa-whatsapp text-3xl text-deep-orange-600"></i>
                  <div>
                    <h2 className="text-xl md:text-3xl lg:text-3xl text-black font-bold">
                      Whatsapp
                    </h2>
                    <p className="md:text-xl lg:text-xl mt-2 text-blue-gray-500 font-medium">
                      +88 01737-268782
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*----------Form-----------*/}
        <div className="flex-1">
          <form
            action="https://getform.io/f/bpjjmdpb"
            method="POST"
            className="w-full bg-[#f4eded] p-4 w rounded-xl"
          >
            {/*--------------1-------------*/}
            <div className="form-control py-2">
              <label className="label">
                <span className="label-text text-xl md:text-2xl lg:text-2xl text-blue-gray-500 font-medium">
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                placeholder="Enter Your Full Name"
                className="input input-bordered w-full text-xl text-black bg-white"
              />
            </div>
            {/*--------------2-------------*/}
            <div className="form-control py-2">
              <label className="label">
                <span className="label-text text-xl md:text-2xl lg:text-2xl text-blue-gray-500 font-medium">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Enter Your Email"
                className="input input-bordered w-full text-xl text-black bg-white"
              />
            </div>
            {/*--------------3-------------*/}
            <div className="form-control py-2">
              <label className="label">
                <span className="label-text text-xl md:text-2xl lg:text-2xl text-blue-gray-500 font-medium">
                  Subject
                </span>
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                autoComplete="subject"
                placeholder="Enter Your Subject"
                className="input input-bordered w-full text-xl text-black bg-white"
              />
            </div>
            {/*--------------4-------------*/}
            <div className="form-control py-2">
              <label className="label">
                <span className="label-text text-xl md:text-2xl lg:text-2xl text-blue-gray-500 font-medium">
                  Your Message
                </span>
              </label>
              <textarea
                type="text"
                name="message"
                id="message"
                autoComplete="message"
                placeholder="Enter Your Message"
                className="w-full h-[200px] p-4 text-xl outline-0 rounded-xl text-black bg-white"
              />
            </div>
            <div className="py-6">
              <button
                type="submit"
                className="btn bg-deep-orange-600 text-xl w-full border-0 text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
