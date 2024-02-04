import vessel1 from "../img/1.jpg";
import vessel2 from "../img/8.jpg";

import "./DescriptionStyles.css";
import DescriptionData from "./DescriptionData";

const Description = () => {
  return (
    <div className="description">
      <DescriptionData
        text='Welcome to the page of "Aurora" - a maritime crewing agency with
        offices located in Portugal and Ukraine! MCA "Aurora" recruits
        qualified seafarers mainly for ship owners and ship managers. We
        provide services both for seafarers and ship owners. Since our
        establishment in 2019, our team carefully selects each crew member
        to ensure the best working conditions on your vessel.We guarantee
        that our specialists have the appropriate qualifications and
        experience, as well as undergo thorough training before being sent
        on board. We also provide a wide range of additional services.
        Contact us to learn more about how we can help your company and
        ensure its success at sea!'
        img1={vessel1}
        img2={vessel2}
      />
    </div>
  );
};

export default Description;
