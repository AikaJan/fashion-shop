import React from "react";
import "./footer.css";
import fb from "./../../img/socials/fb.svg";
import inc from "./../../img/socials/inst.svg";
import twit from "./../../img/socials/tw.svg";
import lin from "./../../img/socials/in.svg";

const Footer = () => {
  return (
    <div className="socialBlock">
      <div className="socialTitle">
        <div className="titleFashion">FASHION</div>
        <hr />
        <p>Complete your style with awesome clothes from us</p>
        <div className="socialIcons">
          <img className="socials" src={fb} alt="" />
          <img className="socials" src={inc} alt="" />
          <img className="socials" src={twit} alt="" />
          <img className="socials" src={lin} alt="" />
        </div>
      </div>
      <div className="linksList">
        <table>
          <tr>
            <th>Company</th>
            <th>Quick Links</th>
            <th>Legal</th>
          </tr>
          <tr>
            <td>About</td>
            <td>Share Location</td>
            <td>Terms & Conditions</td>
          </tr>
          <tr>
            <td>Contact us</td>
            <td>Order Tracking</td>
            <td>Privacy Policy</td>
          </tr>
          <tr>
            <td>Careers</td>
            <td>FAQs</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Footer;
