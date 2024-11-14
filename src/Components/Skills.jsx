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
      <div className="mt-20 py-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-black">
          My Skills
        </h1>
        <div className="w-20 h-[3px] bg-deep-orange-600 m-auto mt-4"></div>
      </div>

      {/*===============Design===========Skills===========*/}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {skills.map((item) => (
          <div
            key={item.id}
            className="flex items-center shadowOne gap-4  rounded-lg py-3 px-4"
          >
            <img
              src={item.image}
              className="w-[80px] h-[80px] object-cover"
            />
            <div>
              <h2 className="text-2xl text-blue-gray-300 font-bold">{item.titleName}</h2>
              <h4 className="text-xl text-blue-gray-500 mt-1 font-medium">
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
