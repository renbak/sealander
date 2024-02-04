import { Component } from "react";
import vessel1 from "../img/1.jpg";
import vessel2 from "../img/8.jpg";

import "./DescriptionStyles.css";

class DescriptionData extends Component {
  render() {
    return (
      <div className="first-des">
        <div className="des-text">
          <p>{this.props.text}</p>
        </div>

        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default DescriptionData;
