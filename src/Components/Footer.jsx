import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-16">
      <footer className="bg-[#f7f3f3] w-full h-36">
        <div className="flex items-center justify-between gap-6 py-10 flex-col lg:flex-row container m-auto">
          <div className="">
            <div className="flex gap-5">
              <Link to="https://www.facebook.com/profile.php?id=61550632539237">
                <i className="fa-brands fa-facebook text-4xl text-deep-orange-600 hover:-translate-y-2 duration-100 delay-100"></i>
              </Link>
              <Link to="https://x.com/NaofelMd25125">
                <i className="fa-brands fa-twitter text-4xl ml-3 text-deep-orange-600 hover:-translate-y-2 duration-100 delay-100"></i>
              </Link>
              <Link to="https://www.linkedin.com/in/md-naofel-badsha">
                <i className="fa-brands fa-linkedin text-4xl ml-3 text-deep-orange-600 hover:-translate-y-2 duration-100 delay-100"></i>
              </Link>
              <Link to="https://www.instagram.com/naofelbadsha007">
                <i className="fa-brands fa-instagram text-4xl ml-3 text-deep-orange-600 hover:-translate-y-2 duration-100 delay-100"></i>
              </Link>
            </div>
          </div>
          <div>
            <p className="text-xl text-cyan-700">
              © All Rights Reserved 2023 - 2024 | Naofel Badsha
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
