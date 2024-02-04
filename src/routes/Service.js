import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../img/3.jpg";
import Footer from "../components/Footer";
import ServiceText from "../components/ServiceText";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <ServiceText />
      <Footer />
    </>
  );
}

export default Service;
