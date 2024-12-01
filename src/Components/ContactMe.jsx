import "./Css/Shadow.css";
const ContactMe = () => {
  return (
    <div className="container m-auto px-2" id="contact">
      {/*-----------Heading-----------*/}
      <div className="mt-16 mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold text-white">
          Contact Me
        </h1>
        <div className="w-20 h-[2px] bg-deep-orange-700 m-auto mt-2"></div>
      </div>

      <div className="flex justify-between gap-10 flex-col lg:flex-row">
        {/*----------Img-------And----Artical--------*/}
        <div className="flex-1 shadowOne rounded-xl p-5">
          {/*----------Img---------------*/}
          <div className="">
            <img
              src="https://i.ibb.co/PWms5Gp/How-to-prepare-for-job-interview.jpg"
              className="rounded-lg"
            />
          </div>
          {/*--------------Artical------------*/}
          <div>
            <div className="py-5">
              <h1 className="text-3xl md:text-4xl lg:text-4xl text-white">
                Naofel Badsha
              </h1>
              <h3 className="text-lg md:text-2xl lg:text-2xl mt-2 text-gray-500">
                Professional Front End Developer, & and Basic{" "}
                <small className="text-2xl text-deep-orange-700 font-bold">
                  MARN Stack
                </small>{" "}
                Developer.
              </h3>
              <h4 className="text-lg md:text-2xl lg:text-2xl mt-2 text-gray-500">
                Are You Looking For Your Business Online Presence? I am here.
              </h4>
            </div>
            {/*--------Social-------Contact--------*/}
            <div className="flex mt-2 justify-between flex-wrap">
              <div>
                {/*-------Card-------1-----*/}
                <div className="flex gap-3">
                  <i className="fa-solid fa-location-dot text-2xl text-deep-orange-600"></i>
                  <div>
                    <h2 className="text-xl md:text-3xl lg:text-3xl text-white">
                      Address
                    </h2>
                    <p className="md:text-xl lg:text-xl mt-2 text-blue-gray-500">
                      Gulistan, Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
                {/*-------Card-------2-----*/}
                <div className="flex gap-3 mt-2 mb-2">
                  <i className="fa-solid fa-envelope text-2xl text-deep-orange-700"></i>
                  <div>
                    <h2 className="text-xl md:text-xl lg:text-3xl text-white">
                      Email
                    </h2>
                    <p className="md:text-xl lg:text-xl mt-2 text-blue-gray-500">
                      naofelbadsha@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div>
                {/*-------Card-------3-----*/}
                <div className="flex gap-3">
                  <i className="fa-brands fa-whatsapp text-2xl text-deep-orange-700"></i>
                  <div>
                    <h2 className="text-xl md:text-3xl lg:text-3xl text-white">
                      Whatsapp
                    </h2>
                    <p className="md:text-xl lg:text-xl mt-2 text-blue-gray-500">
                      +88 01737-268782
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*----------Form-----------*/}
        <div className="flex-1 shadowOne rounded-xl h-[720px]">
          <form
            action="https://getform.io/f/bpjjmdpb"
            method="POST"
            className="w-full  p-4 w rounded-xl"
          >
            {/*--------------1-------------*/}
            <div className="form-control py-2">
              <label className="label">
                <span className="label-text text-xl md:text-2xl lg:text-2xl text-gray-500 font-medium">
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                placeholder="Enter Your Full Name"
                className="input input-bordered w-full text-lg md:text-xl lg:text-xl bg-transparent text-white placeholder:text-white"
              />
            </div>
            {/*--------------2-------------*/}
            <div className="form-control py-2">
              <label className="label">
                <span className="label-text text-xl md:text-2xl lg:text-2xl text-gray-500 font-medium">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Enter Your Email"
                className="input input-bordered w-full text-lg md:text-xl lg:text-xl bg-transparent text-white placeholder:text-white"
              />
            </div>
            {/*--------------3-------------*/}
            <div className="form-control py-2">
              <label className="label">
                <span className="label-text text-xl md:text-2xl lg:text-2xl text-gray-500 font-medium">
                  Subject
                </span>
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                autoComplete="subject"
                placeholder="Enter Your Subject"
                className="input input-bordered w-full text-lg md:text-xl lg:text-xl bg-transparent text-white placeholder:text-white"
              />
            </div>
            {/*--------------4-------------*/}
            <div className="form-control py-2">
              <label className="label">
                <span className="label-text text-xl md:text-2xl lg:text-2xl text-gray-500 font-medium">
                  Your Message
                </span>
              </label>
              <textarea
                type="text"
                name="message"
                id="message"
                autoComplete="message"
                placeholder="Enter Your Message"
                className="w-full h-[150px] md:h-[200px] lg:h-[200px] p-4 text-lg md:text-xl lg:text-xl outline-0 border-[2px] border-gray-800 rounded-xl text-white placeholder:text-white bg-transparent"
              />
            </div>
            <div className="py-6">
              <button
                type="submit"
                className="btn bg-deep-orange-700 hover:bg-[#122025] text-xl w-full border-0 text-white"
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
