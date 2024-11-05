import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  const { image, user_name, review_text } = testimonial;

  return (
    <div>
      <div className="-z-50">
        <div>
          <div>
            <img src={image} />
          </div>
          <div>
            <FaStar></FaStar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
