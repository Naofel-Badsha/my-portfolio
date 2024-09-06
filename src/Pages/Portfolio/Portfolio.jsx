import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

import { Link } from "react-router-dom";
import "../Portfolio/Portfolio.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({duration: "2000"}) 
  },[])

  return (
    <div className="container m-auto">
      {/*-----------Heading-----------*/}
      <div className="mt-20 py-5">
        <h1 className="text-3xl md:text-4xl lg:text-7xl text-center text-black">
          My Portfolio
        </h1>
        <div className="w-40 h-[2px] bg-deep-orange-600 m-auto mt-2"></div>
      </div>
      <div className="portfolio-contact grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/*---------Portfolio-------1---------*/}
        <div className="portfolio-col" data-aos="fade-right">
          <img src="https://i.ibb.co/zJwkbn2/Portfolio-4.webp" />
          <div className=" absolute top-0 ">
            <Link>
              <i className="fa-brands fa-github flex items-center justify-center text-3xl bg-deep-orange-500 text-white w-12 h-12 rounded-full ml-28 mt-3"></i>
            </Link>
          </div>
          <div className="layer">
            <h3>Web Bresnices Plan</h3>
          </div>
        </div>
        {/*---------Portfolio-------2---------*/}
        <div className="portfolio-col" data-aos="fade-down">
          <img src="https://i.ibb.co/nzzMVjh/Portfolio-5.jpg" />
          <div className=" absolute top-0 ">
            <Link>
              <i className="fa-brands fa-github flex items-center justify-center text-3xl bg-deep-orange-500 text-white w-12 h-12 rounded-full ml-28 mt-3"></i>
            </Link>
          </div>
          <div className="layer">
            <h3>Web Bresnices Plan</h3>
          </div>
        </div>
        {/*---------Portfolio-------3---------*/}
        <div className="portfolio-col" data-aos="fade-left">
          <img src="https://i.ibb.co/zbB25JJ/Portfolio-1.jpg" />
          <div className=" absolute top-0 ">
            <Link>
              <i className="fa-brands fa-github flex items-center justify-center text-3xl bg-deep-orange-500 text-white w-12 h-12 rounded-full ml-28 mt-3"></i>
            </Link>
          </div>
          <div className="layer">
            <h3>Web Bresnices Plan</h3>
          </div>
        </div>
        {/*---------Portfolio-------4---------*/}
        <div className="portfolio-col" data-aos="fade-right">
          <img src="https://i.ibb.co/sW1tHb0/Portfolio-2.jpg" />
          <div className=" absolute top-0 ">
            <Link>
              <i className="fa-brands fa-github flex items-center justify-center text-3xl bg-deep-orange-500 text-white w-12 h-12 rounded-full ml-28 mt-3"></i>
            </Link>
          </div>
          <div className="layer">
            <h3>Web Bresnices Plan</h3>
          </div>
        </div>
        {/*---------Portfolio-------5---------*/}
        <div className="portfolio-col" data-aos="fade-up">
          <img src="https://i.ibb.co/qp20Cwc/Portfolio-3.jpg" />
          <div className=" absolute top-0 ">
            <Link>
              <i className="fa-brands fa-github flex items-center justify-center text-3xl bg-deep-orange-500 text-white w-12 h-12 rounded-full ml-28 mt-3"></i>
            </Link>
          </div>
          <div className="layer">
            <h3>Web Bresnices Plan</h3>
          </div>
        </div>
        {/*---------Portfolio-------6---------*/}
        <div className="portfolio-col" data-aos="fade-left">
          <img src="https://i.ibb.co/fx10Lfb/Portfolio-9.jpg" />
          <div className=" absolute top-0 ">
            <Link>
              <i className="fa-brands fa-github flex items-center justify-center text-3xl bg-deep-orange-500 text-white w-12 h-12 rounded-full ml-28 mt-3"></i>
            </Link>
          </div>
          <div className="layer">
            <h3>Web Bresnices Plan</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
