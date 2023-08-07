import { Component } from "react";
import Header from "./Header";
import call from "../assets/images/call.svg";
import mail from "../assets/images/mail.svg";
import github1 from "../assets/images/github1.svg";

class Footer extends Component {
  render() {
    return (
      <div className="footer p-5 mb-5">
        <Header />
        <div className="contact-wrapper">
          <h6 className="py-2">CONTACT</h6>
          <p>
            <a href="mailto:ahabnnie@gmail.com">
              <img src={mail} alt="email"></img> ahabnnie@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:020-172-61-52">
              <img src={call} alt="phone"></img> 0201726152
            </a>
          </p>
          <p>
            <a
              href="https://github.com/isaacohenedanso

"
            >
              <img src={github1} alt="github"></img>{" "}
              https://github.com/isaacohenedanso
            </a>
          </p>
        </div>
        <hr></hr>
        <small> © 2023 Isaac Dorer. All rights reserved.</small>
      </div>
    );
  }
}

export default Footer;
