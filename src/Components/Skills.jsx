const Skills = () => {
  return (
    <div className="container m-auto">
      {/*-----------Heading-----------*/}
      <div className="mt-20 py-5">
        <h1 className="text-3xl md:text-4xl lg:text-7xl text-center text-black">
          My Skills
        </h1>
        <div className="w-40 h-[2px] bg-deep-orange-600 m-auto mt-2"></div>
      </div>

      <div className="overflow-auto flex items-center justify-center border-2 border-deep-orange-600 rounded-lg  mt-10">
        <div className="py-6 px-6">
          {/*---------Design-------Skills-----*/}
          <h3 className="text-2xl md:text-3xl lg:text-3xl text-deep-orange-600 font-medium py-5">
            Design Skills
          </h3>
          <div className="flex gap-6">
            {/*--------Design-----Image----1------*/}
            <img
              src="https://i.ibb.co.com/3WZL6sg/Html.png"
              className="w-[120px] h-[120px] object-cover border-2 border-gray-400 p-1 rounded-full"
            />
            {/*--------Design-----Image----2------*/}
            <img
              src="https://i.ibb.co.com/55t71ZV/Css.png"
              className="w-[120px] h-[120px] object-cover border-2 border-gray-400 p-1 rounded-full"
            />
            {/*--------Design-----Image----3------*/}
            <img
              src="https://i.ibb.co.com/TLTk7ZS/Java-Scrict.png"
              className="w-[120px] h-[120px] object-cover border-2 border-gray-400 p-1 rounded-full"
            />
            {/*--------Design-----Image----4------*/}
            <img
              src="https://i.ibb.co.com/QXFR1rr/Taildind.png"
              className="w-[120px] h-[120px] object-cover border-2 border-gray-400 p-1 rounded-full"
            />
            {/*--------Design-----Image----5------*/}
            <img
              src="https://i.ibb.co.com/vd8YJWC/Boot-Strap.png"
              className="w-[120px] h-[120px] object-cover border-2 border-gray-400 p-1 rounded-full"
            />
            {/*--------Design-----Image----6------*/}
            <img
              src="https://i.ibb.co.com/sPTZ010/Figmat.png"
              className="w-[120px] h-[120px] object-cover border-2 border-gray-400 p-1 rounded-full"
            />
            {/*--------Design-----Image----7------*/}
            <img
              src="https://i.ibb.co.com/YpKjRmm/React.png"
              className="w-[120px] h-[120px] object-cover border-2 border-gray-400 p-1 rounded-full"
            />
          </div>
          {/*---------Development-------Skills-----*/}
          <div className="mt-10">
            <h3 className="text-2xl md:text-3xl lg:text-3xl text-deep-orange-600 font-medium py-5">
              Development Skills
            </h3>
            <div className="flex gap-6">
              {/*--------Development-----Image----1------*/}
              <img
                src="https://i.ibb.co.com/8M45RtX/Nodejs.png"
                className="w-[120px] h-[120px] object-cover border-2 border-gray-400 p-1 rounded-full"
              />
              {/*--------Development-----Image----2------*/}
              <img
                src="https://i.ibb.co.com/qJtz9VB/Express-Js.png"
                className="w-[120px] h-[120px] object-cover border-2 border-gray-400 p-1 rounded-full"
              />
              {/*--------Development-----Image----3------*/}
              <img
                src="https://i.ibb.co.com/YhT2jfk/MongoDb.png"
                className="w-[120px] h-[120px] object-cover border-2 border-gray-400 p-1 rounded-full"
              />
              {/*--------Development-----Image----4------*/}
              <img
                src="https://i.ibb.co.com/Jt6tx8d/Jwt.png"
                className="w-[120px] h-[120px] object-cover border-2 border-gray-400 p-1 rounded-full"
              />
              {/*--------Development-----Image----5------*/}
              <img
                src="https://i.ibb.co.com/nC8MYPR/Firebase.png"
                className="w-[120px] h-[120px] object-cover border-2 border-gray-400 p-1 rounded-full"
              />
              {/*--------Development-----Image----6------*/}
              <img
                src="https://i.ibb.co.com/3W3G29m/Git-2.png"
                className="w-[120px] h-[120px] object-cover border-2 border-gray-400 p-1 rounded-full"
              />

              {/*--------Development-----Image----7------*/}
              <img src="" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
