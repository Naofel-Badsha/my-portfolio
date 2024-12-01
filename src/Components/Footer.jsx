
const Footer = () => {
  return (
    <div className="mt-16">
      <footer className="bg-[#f7f3f3] w-full  py-10">
        <div className="flex items-center justify-between gap-6 py-10 flex-col lg:flex-row container m-auto">
          <div className="flex gap-5">
            <a href="https://www.facebook.com/profile.php?id=61550632539237">
              <i className="fa-brands fa-facebook text-4xl text-deep-orange-600 hover:-translate-y-2 duration-100 delay-100"></i>
            </a>
            <a href="https://x.com/NaofelMd25125">
              <i className="fa-brands fa-twitter text-4xl ml-3 text-deep-orange-600 hover:-translate-y-2 duration-100 delay-100"></i>
            </a>
            <a href="https://www.linkedin.com/in/md-naofel-badsha">
              <i className="fa-brands fa-linkedin text-4xl ml-3 text-deep-orange-600 hover:-translate-y-2 duration-100 delay-100"></i>
            </a>
            <a href="https://www.instagram.com/naofelbadsha007">
              <i className="fa-brands fa-instagram text-4xl ml-3 text-deep-orange-600 hover:-translate-y-2 duration-100 delay-100"></i>
            </a>
          </div>

          <div>
            <p className="text-md text-cyan-700 px-2">
              © All Rights Reserved 2024 | Naofel Badsha
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
