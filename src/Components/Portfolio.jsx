import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./Css/Shadow.css"
const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);

  return (
    <div className="container m-auto px-2" id="portfolio">
      {/*-----------Heading-----------*/}
      <div className="mt-20 py-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-black">
          My Portfolio
        </h1>
        <div className="w-20 h-[3px] bg-deep-orange-600 m-auto mt-4"></div>
      </div>

      {/*---------------Portfolio---------*/}
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 mt-16">
        {/*---------Portfolio-------1---------*/}
        <div className="shadowOne w-full p-5 rounded-xl">
          <div>
            <img
              src="https://i.ibb.co.com/qMCgxGp/Choching-Center.png"
              className="w-full h-[500px] rounded-xl object-cover"
            />
          </div>
          <div className="">
            <h2 className="text-2xl md:text-3xl lg:text-3xl mt-8 font-bold text-blue-gray-500">
              Neuron Coaching Center
            </h2>
            {/*----------Icon----------*/}
            <div className="flex gap-16 py-5">
              <a
                href="https://github.com/Naofel-Badsha/neuron-clint">
                <i className="fa-brands fa-github flex items-center justify-center text-3xl bg-deep-orange-500 text-white w-14 h-14 rounded-full"></i>
              </a>
              <a href="">
                <i className="fa-solid fa-eye flex items-center justify-center text-3xl bg-deep-orange-500 text-white w-14 h-14 rounded-full"></i>
              </a>
            </div>
          </div>
        </div>

        {/*---------Portfolio-------2---------*/}
        <div className="shadowOne w-full p-5 rounded-xl">
          <div>
            <img
              src="https://i.ibb.co.com/LJM7jPw/Food-Delevary.png"
              className="w-full h-[500px] rounded-xl object-cover"
            />
          </div>
          <div className="">
            <h2 className="text-2xl md:text-3xl lg:text-3xl mt-8 font-bold text-blue-gray-500">
              Food Delivery
            </h2>
            {/*----------Icon----------*/}
            <div className="flex gap-16 py-5">
              <a href="https://github.com/Naofel-Badsha/food-delivery-1-client">
                <i className="fa-brands fa-github flex items-center justify-center text-3xl bg-deep-orange-500 text-white w-14 h-14 rounded-full"></i>
              </a>
              <a href="">
                <i className="fa-solid fa-eye flex items-center justify-center text-3xl bg-deep-orange-500 text-white w-14 h-14 rounded-full"></i>
              </a>
            </div>
          </div>
        </div>

        {/*---------Portfolio-------3---------*/}
        <div className="shadowOne w-full p-5 rounded-xl">
          <div>
            <img
              src="https://i.ibb.co.com/XFbcnmJ/Construction-PP-1.png"
              className="w-full h-[500px] rounded-xl object-cover"
            />
          </div>
          <div className="">
            <h2 className="text-2xl md:text-3xl lg:text-3xl mt-8 font-bold text-blue-gray-500">
              Construction
            </h2>
            {/*----------Icon----------*/}
            <div className="flex gap-16 py-5">
              <a href="https://github.com/Naofel-Badsha/construction-project-1">
                <i className="fa-brands fa-github flex items-center justify-center text-3xl bg-deep-orange-500 text-white w-14 h-14 rounded-full"></i>
              </a>
              <a href="">
                <i className="fa-solid fa-eye flex items-center justify-center text-3xl bg-deep-orange-500 text-white w-14 h-14 rounded-full"></i>
              </a>
            </div>
          </div>
        </div>
        {/*---------Portfolio-------4---------*/}
        <div className="shadowOne w-full p-5 rounded-xl">
          <div>
            <img
              src="https://i.ibb.co.com/88qwJHd/Ecommers-1.png"
              className="w-full h-[500px] rounded-xl object-cover"
            />
          </div>
          <div className="">
            <h2 className="text-2xl md:text-3xl lg:text-3xl mt-8 font-bold text-blue-gray-500">
              E-Commerce
            </h2>
            {/*----------Icon----------*/}
            <div className="flex gap-16 py-5">
              <a href="https://github.com/zaheenrakib/Miraz-Mart-Client">
                <i className="fa-brands fa-github flex items-center justify-center text-3xl bg-deep-orange-500 text-white w-14 h-14 rounded-full"></i>
              </a>
              <a href="">
                <i className="fa-solid fa-eye flex items-center justify-center text-3xl bg-deep-orange-500 text-white w-14 h-14 rounded-full"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
