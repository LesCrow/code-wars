import React from "react";
import { categories } from "../utils/constants";

function Categories() {
  return (
    <div
      className="flex m-auto text-white text-lg font-bold h-14 w-[80%]
    bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600"
    >
      {categories.map((category) => (
        <li className="text-mg text-white w-[20%] list-none ml-5 ">
          {category}
        </li>
      ))}
    </div>
  );
}

export default Categories;
