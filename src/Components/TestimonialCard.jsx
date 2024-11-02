import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const TestimonialCard = ({ testimonial }) => {
  const { image, user_name, review_text } = testimonial;

  useEffect(() => {
    AOS.init({duration: "2000"}) 
  },[])
  return (
    <div>
      <div className=" border-2 border-deep-orange-600 shadow-xl" data-aos="fade-right">
        <div className="p-4 ">
            <div className="flex items-center justify-between">
              <div className="">
                <img src={image} className="w-14 h-14 rounded-full object-cover"/>
              </div>
              <div className="flex gap-2">
              <i className="fa-solid fa-star text-2xl text-deep-orange-600"></i>
              <i className="fa-solid fa-star text-2xl text-deep-orange-600"></i>
              <i className="fa-solid fa-star text-2xl text-deep-orange-600"></i>
              <i className="fa-solid fa-star-half-stroke text-2xl text-deep-orange-600"></i>
              <i className="fa-solid fa-star-half-stroke text-2xl text-deep-orange-600"></i>
              </div>
            </div>
          <h2 className="text-3xl text-center text-black font-bold py-5">{user_name}</h2>
          <p className="text-lg text-black">{review_text}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
