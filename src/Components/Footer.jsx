import React from "react";
import logo1 from "../Images/github-logo.png";
import logo2 from "../Images/insta-logo.png";
import logo3 from "../Images/youtube-logo.png";
import logo4 from "../Images/twitter-logo.png";
import logo5 from "../Images/logo.fb.png";
import logo10 from "../Images/github-logo-noir.png";
import logo20 from "../Images/insta-logo-noir.png";
import logo30 from "../Images/youtube-logo-noir.png";
import logo40 from "../Images/twitter-logo-noir.png";
import logo50 from "../Images/logo-fb-noir.png";

function Footer() {
  return (
    <div className="bg-pink w-full h-32 flex flex-col justify-center md:flex md:flex-row md:justify-between p-5">
      <div className="text-white text-sm flex flex-col justify-center items-center mb-2 md:items-start">
        <p>Adresse</p>
        <p>27 Route de Pitoys</p>
        <p>64100 Anglet</p>
        <p>biarritz@wildcodeschool.com</p>
      </div>
      <div className="flex flex-row justify-center items-center">
        <a href="https://github.com/WildCodeSchool">
          <img
            className="h-8  "
            src={logo1}
            alt="logo de GitHub"
            onMouseOver={(e) => (e.currentTarget.src = logo10)}
            onMouseLeave={(e) => (e.currentTarget.src = logo1)}
          />
        </a>
        <a href="https://www.instagram.com/wildcodeschoolofficial/?hl=en">
          <img
            className="h-8"
            src={logo2}
            alt="logo de Instagram"
            onMouseOver={(e) => (e.currentTarget.src = logo20)}
            onMouseLeave={(e) => (e.currentTarget.src = logo2)}
          />
        </a>
        <a href="https://www.youtube.com/channel/UCi99G_0QPx5sYsK8zdvQzfw">
          <img
            className="h-8"
            src={logo3}
            alt="logo de Youtube"
            onMouseOver={(e) => (e.currentTarget.src = logo30)}
            onMouseLeave={(e) => (e.currentTarget.src = logo3)}
          />
        </a>
        <a href="https://twitter.com/wildcodeschool">
          <img
            className="h-8"
            src={logo4}
            alt="logo de Twitter"
            onMouseOver={(e) => (e.currentTarget.src = logo40)}
            onMouseLeave={(e) => (e.currentTarget.src = logo4)}
          />
        </a>
        <a href="https://www.facebook.com/WildCodeSchool/">
          <img
            className="h-8"
            src={logo5}
            alt="logo de Facebook"
            onMouseOver={(e) => (e.currentTarget.src = logo50)}
            onMouseLeave={(e) => (e.currentTarget.src = logo5)}
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
