import "./Css/Shadow.css";
const Portfolio = () => {
  return (
    <div className="container m-auto px-2" id="portfolio">
      {/*-----------Heading-----------*/}
      <div className="mt-16 py-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold text-white">
          My Portfolio
        </h1>
        <div className="w-20 h-[3px] bg-deep-orange-600 m-auto mt-4"></div>
      </div>

      {/*---------------Portfolio---------*/}
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 mt-10">
        {/*---------Portfolio-------1---------*/}
        <div className="shadowOne w-full p-3 md:p-5 lg:p-5 rounded-xl hover:bg-[#122025] border-0 hover:border-[1px] duration-200">
          <div>
            <img
              src="https://i.ibb.co.com/qMCgxGp/Choching-Center.png"
              className="w-full h-[300px] md:h-[300px] lg:h-[500px] rounded-xl"
            />
          </div>
          <div className="">
            <h2 className="text-xl md:text-2xl lg:text-3xl mt-6 font-medium text-white">
              Neuron Coaching Center
            </h2>
            {/*----------Icon----------*/}
            <div className="flex gap-16 py-3 mt-2">
              <a href="https://github.com/Naofel-Badsha/neuron-clint">
                <i className="fa-brands fa-github flex items-center justify-center text-2xl md:text-3xl lg:text-3xl bg-deep-orange-700 text-white w-10 h-10 md:w-12 mg:h-12 lg:w-12 lg:h-12 rounded-full"></i>
              </a>
              <a href="https://neuronnursingcoaching.com">
                <i className="fa-solid fa-eye flex items-center justify-center text-2xl md:text-3xl lg:text-3xl bg-deep-orange-700 text-white w-10 h-10 md:w-12 mg:h-12 lg:w-12 lg:h-12 rounded-full"></i>
              </a>
            </div>
          </div>
        </div>
        {/*---------Portfolio-------2---------*/}
        <div className="shadowOne w-full p-3 md:p-5 lg:p-5 rounded-xl hover:bg-[#122025] border-0 hover:border-[1px] duration-200">
          <div>
            <img
              src="https://i.ibb.co.com/88qwJHd/Ecommers-1.png"
              className="w-full h-[300px] md:h-[300px] lg:h-[500px] rounded-xl"
            />
          </div>
          <div className="">
            <h2 className="text-xl md:text-2xl lg:text-3xl mt-6 font-medium text-white">
             Miraz Mart E-Commerce
            </h2>
            {/*----------Icon----------*/}
            <div className="flex gap-16 py-3 mt-2">
              <a href="https://github.com/zaheenrakib/Miraz-Mart-Client">
                <i className="fa-brands fa-github flex items-center justify-center text-2xl md:text-3xl lg:text-3xl bg-deep-orange-700 text-white w-10 h-10 md:w-12 mg:h-12 lg:w-12 lg:h-12 rounded-full"></i>
              </a>
              <a href="https://www.mirazmart.com">
                <i className="fa-solid fa-eye flex items-center justify-center text-2xl md:text-3xl lg:text-3xl bg-deep-orange-700 text-white w-10 h-10 md:w-12 mg:h-12 lg:w-12 lg:h-12 rounded-full"></i>
              </a>
            </div>
          </div>
        </div>

        {/*---------Portfolio-------3---------*/}
        <div className="shadowOne w-full p-3 md:p-5 lg:p-5 rounded-xl hover:bg-[#122025] border-0 hover:border-[1px] duration-200">
          <div>
            <img
              src="https://i.ibb.co.com/LJM7jPw/Food-Delevary.png"
              className="w-full h-[300px] md:h-[300px] lg:h-[500px] rounded-xl"
            />
          </div>
          <div className="">
            <h2 className="text-xl md:text-2xl lg:text-3xl mt-6 font-medium text-white">
              Food Delivery
            </h2>
            {/*----------Icon----------*/}
            <div className="flex gap-16 py-3 mt-2">
              <a href="https://github.com/Naofel-Badsha/food-delivery-1-client">
                <i className="fa-brands fa-github flex items-center justify-center text-2xl md:text-3xl lg:text-3xl bg-deep-orange-700 text-white w-10 h-10 md:w-12 mg:h-12 lg:w-12 lg:h-12 rounded-full"></i>
              </a>
              <a href="https://food-delivery-1-client.vercel.app">
                <i className="fa-solid fa-eye flex items-center justify-center text-2xl md:text-3xl lg:text-3xl bg-deep-orange-700 text-white w-10 h-10 md:w-12 mg:h-12 lg:w-12 lg:h-12 rounded-full"></i>
              </a>
            </div>
          </div>
        </div>

        {/*---------Portfolio-------4---------*/}
        <div className="shadowOne w-full p-3 md:p-5 lg:p-5 rounded-xl hover:bg-[#122025] border-0 hover:border-[1px] duration-200">
          <div>
            <img
              src="https://i.ibb.co.com/RG8mQGW/Hotel-Booking-2.png"
              className="w-full h-[300px] md:h-[300px] lg:h-[500px] rounded-xl"
            />
          </div>
          <div className="">
            <h2 className="text-xl md:text-2xl lg:text-3xl mt-6 font-medium text-white">
              Hotel Booking
            </h2>
            {/*----------Icon----------*/}
            <div className="flex gap-16 py-3 mt-2">
              <a href="https://github.com/Naofel-Badsha/hotel-booking-1-client">
                <i className="fa-brands fa-github flex items-center justify-center text-2xl md:text-3xl lg:text-3xl bg-deep-orange-700 text-white w-10 h-10 md:w-12 mg:h-12 lg:w-12 lg:h-12 rounded-full"></i>
              </a>
              <a href="https://hotelbooking2.netlify.app">
                <i className="fa-solid fa-eye flex items-center justify-center text-2xl md:text-3xl lg:text-3xl bg-deep-orange-700 text-white w-10 h-10 md:w-12 mg:h-12 lg:w-12 lg:h-12 rounded-full"></i>
              </a>
            </div>
          </div>
        </div>

        {/*---------Portfolio-------5---------*/}
        <div className="shadowOne w-full p-3 md:p-5 lg:p-5 rounded-xl hover:bg-[#122025] border-0 hover:border-[1px] duration-200">
          <div>
            <img
              src="https://i.ibb.co.com/XFbcnmJ/Construction-PP-1.png"
              className="w-full h-[300px] md:h-[300px] lg:h-[500px] rounded-xl"
            />
          </div>
          <div className="">
            <h2 className="text-xl md:text-2xl lg:text-3xl mt-6 font-medium text-white">
              Construction
            </h2>
            {/*----------Icon----------*/}
            <div className="flex gap-16 py-3 mt-2">
              <a href="https://github.com/Naofel-Badsha/construction-project-1">
                <i className="fa-brands fa-github flex items-center justify-center text-2xl md:text-3xl lg:text-3xl bg-deep-orange-700 text-white w-10 h-10 md:w-12 mg:h-12 lg:w-12 lg:h-12 rounded-full"></i>
              </a>
              <a href="https://cheery-fox-5a2b22.netlify.app">
                <i className="fa-solid fa-eye flex items-center justify-center text-2xl md:text-3xl lg:text-3xl bg-deep-orange-700 text-white w-10 h-10 md:w-12 mg:h-12 lg:w-12 lg:h-12 rounded-full"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
