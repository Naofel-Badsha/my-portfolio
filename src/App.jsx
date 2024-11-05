
import "./App.css";
import AboutBanner from "./Components/AboutBanner";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Skills from "./Components/Skills";



function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutBanner></AboutBanner>
      <Services></Services>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </>
  );
}

export default App;
