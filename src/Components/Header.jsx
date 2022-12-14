import React from "react";
import logo from "../Images/wild-code-school-blanc.png";
import logo6 from "../Images/codewars2.png";

function Header() {
  return (
    <div className="w-100 h-20 bg-[#b1361e] flex justify-center items-center p-5  ">
      <a href="https://www.wildcodeschool.com/fr-FR">
        <img
          className=" w-28 h-10 flex justify-center items-center"
          src={logo}
          alt="Logo de l'entreprise"
        />
      </a>
      <p className="text-4xl text-white ml-5 mr-5">X</p>
      <div className=" w-36 h-14  flex ml-4 justify-center items-center">
        <a href="https://www.codewars.com/">
          <img src={logo6} alt="Logo de codewars" />{" "}
        </a>
      </div>
    </div>
  );
}

export default Header;
