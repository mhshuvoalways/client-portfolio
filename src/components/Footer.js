import React from "react";
import Instagram from "../assets/images/instagram.svg";
import Twitter from "../assets/images/twitter.svg";
import Youtube from "../assets/images/youtube.svg";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-text">@2021 Keflemariamgebretsadike. ALL RIGHT RESERVED</p>
      <p className="footer-text">HELLO@KEFLEMARIAM.COM</p>
      <div className="header-social">
        <img alt="" src={Instagram} />
        <img alt="" src={Twitter} />
        <img alt="" src={Youtube} />
      </div>
    </div>
  );
};

export default Footer;
