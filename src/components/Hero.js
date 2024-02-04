import "./HeroStyles.css";

function Hero(props) {
  const handleEmailSubmit = () => {
    const recipient = "mcaaurora2020@gmail.com";
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent()}&body=${encodeURIComponent()}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <div className={props.cName}>
        <img alt="HeroImg" src={props.heroImg} />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            <button onClick={handleEmailSubmit}>{props.buttonText}</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
