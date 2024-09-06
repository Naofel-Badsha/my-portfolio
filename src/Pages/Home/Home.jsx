import Hero from "../../Components/Hero/Hero";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";




const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <Testimonial></Testimonial>
            <Portfolio></Portfolio>
        </div>
    );
};

export default Home;