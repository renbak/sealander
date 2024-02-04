import Description from "../components/Description";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1595263026408-d502567353ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        title="Your crew is our priority"
        text="You are building a business, we are building a team."
        buttonText="Submit"
        url="/"
        btnClass="show"
      />
      <Description />
      <Footer />
    </>
  );
}

export default Home;
