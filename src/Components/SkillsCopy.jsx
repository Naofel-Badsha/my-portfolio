import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import "../Skills/Skills.css";

const SkillsCopy = () => {
  return (
    <div>
      <div className="container m-auto">
        <div>
          {/*-----------Heading-----------*/}
          <div className="mt-20 ">
            <h1 className="text-3xl md:text-4xl lg:text-7xl text-center text-black">
              My Skills
            </h1>
            <div className="w-40 h-[2px] bg-deep-orange-600 m-auto mt-2"></div>
          </div>

          <div
            className="skill-box flex gap-10 flex-col lg:flex-row mt-20"
            data-aos="fade-left"
          >
            <div className="left-box">
              <h2 className="text-3xl text-black py-4">Desigen Skills</h2>
              <div className="w-32 h-[2px] bg-deep-orange-600"></div>
              {/* <!-------------Left-------------Box------------1--> */}
              <div className="bar">
                <div className="info">
                  <span>Html</span>
                </div>
                <div className="progress-line html">
                  <span></span>
                </div>
              </div>
              {/* <!-------------Left-------------Box------------2--> */}
              <div className="bar">
                <div className="info">
                  <span>Css</span>
                </div>
                <div className="progress-line css">
                  <span></span>
                </div>
              </div>
              {/* <!-------------Left-------------Box------------3--> */}
              <div className="bar">
                <div className="info">
                  <span>Bootstrap</span>
                </div>
                <div className="progress-line boot">
                  <span></span>
                </div>
              </div>
              {/* <!-------------Left-------------Box------------4--> */}
              <div className="bar">
                <div className="info">
                  <span>Tailwind</span>
                </div>
                <div className="progress-line tail">
                  <span></span>
                </div>
              </div>
              {/* <!-------------Left-------------Box------------5--> */}
              <div className="bar">
                <div className="info">
                  <span>Java Scripet </span>
                </div>
                <div className="progress-line js">
                  <span></span>
                </div>
              </div>
            </div>

            <div className="right-box">
              <h2 className="text-3xl text-black py-4">Development Skills</h2>
              <div className="w-32 h-[2px] bg-deep-orange-600"></div>
              {/* <!-------------Right-------------Box------------2--> */}
              <div className="bar">
                <div className="info">
                  <span>React Js</span>
                </div>
                <div className="progress-line rec">
                  <span></span>
                </div>
              </div>
              {/* <!-------------Right-------------Box------------3--> */}
              <div className="bar">
                <div className="info">
                  <span>Nood Js</span>
                </div>
                <div className="progress-line nood">
                  <span></span>
                </div>
              </div>
              {/* <!-------------Right-------------Box------------4--> */}
              <div className="bar">
                <div className="info">
                  <span>Express Js</span>
                </div>
                <div className="progress-line Exp">
                  <span></span>
                </div>
              </div>

              {/* <!-------------Right-------------Box------------1--> */}
              <div className="bar">
                <div className="info">
                  <span>MongoDB</span>
                </div>
                <div className="progress-line mon">
                  <span></span>
                </div>
              </div>

              {/* <!-------------Right-------------Box------------5--> */}
              <div className="bar">
                <div className="info">
                  <span>Firebase & Figma</span>
                </div>
                <div className="progress-line fireFig">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCopy;
