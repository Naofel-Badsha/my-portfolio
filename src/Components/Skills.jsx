import { useEffect, useState } from "react";
import "./Css/Shadow.css"
const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <div className="container m-auto px-2" id="skills">
      {/*-----------Heading-----------*/}
      <div className=" py-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold text-white">
          My Skills
        </h1>
        <div className="w-20 h-[3px] bg-deep-orange-600 m-auto mt-4"></div>
      </div>

      {/*===============Design===========Skills===========*/}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {skills.map((item) => (
          <div
            key={item.id}
            className="flex items-center shadowOne gap-4 rounded-lg py-3 md:py-2 lg:py-3 px-4 hover:bg-[#122025] border-0 hover:border-[1px] duration-200"
          >
            <img
              src={item.image}
              className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[80px] lg:h-[80px] object-cover"
            />
            <div>
              <h2 className="text-xl md:text-2xl lg:text-2xl text-white font-medium ">{item.titleName}</h2>
              <h4 className="text-lg md:text-xl lg:text-xl text-gray-500 mt-1">
                {item.works}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
