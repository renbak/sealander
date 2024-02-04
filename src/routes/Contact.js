import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../img/5.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="form-container">
          <Hero cName="hero-mid" heroImg={AboutImg} title="Contact" btnClass="hide" />
          <ContactForm />
        </div>
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101723.06762503313!2d-8.617680586447323!3d37.18013386987979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1b28eca9242961%3A0x93fcc923718014e1!2zUG9ydGltw6Nv!5e0!3m2!1sen!2spt!4v1684417574172!5m2!1sen!2spt"
            width="400"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
