import React, { useEffect, useState } from "react";
import axios from "axios";
import { users } from "../utils/constants";
import { categories } from "../utils/constants";

function Table({ user, index }) {
  const [data, setData] = useState([]);

  const getDataFromAllUsers = async () => {
    await Promise.all(
      users.map((user) =>
        axios
          .get(`https://www.codewars.com/api/v1/users/${user.userName}`)
          .then((res) => res.data)
          .then((response) => setData((state) => [...state, response]))
      )
    );
  };

  useEffect(() => {
    getDataFromAllUsers();
  }, []);

  if (data.length < 1) return <div>Loading...</div>;

  // background gold, silver and bronze for the first, second and third place
  const color = (i) => {
    if (i === 1) {
      return "bg-[#D79A10]";
    }
    if (i === 2) {
      return "bg-[#C0C0C0]";
    }
    if (i === 3) {
      return "bg-[#614e1a]";
    }
  };
  return (
    <table className=" border w-[80%] m-auto md:m-auto  backdrop-blur-md border-gray-500 opacity-80 ">
      <tr className="border border-gray-500 ">
        {categories.map((category) => (
          <th className="text-white p-2">{category}</th>
        ))}
      </tr>
      {data
        .sort((a, b) => b.ranks.overall.score - a.ranks.overall.score)
        .map((user, index) => (
          <tr className={color(index + 1)}>
            <th
              className={`${index <= 2 ? "text-black" : "text-white"} text-xl`}
            >
              {index + 1}
            </th>

            <th className="text-white p-2">
              {" "}
              <a
                href={`https://www.codewars.com/users/${user.username}`}
                className={`${index <= 2 ? "text-black" : ""} text-xl`}
              >
                {user.username}{" "}
              </a>
            </th>

            <th
              className={`${index <= 2 ? "text-black" : "text-white"} text-xl`}
            >
              {user.ranks.overall.score}
            </th>
            <th
              className={`${index <= 2 ? "text-black" : "text-white"} text-xl`}
            >
              {user.ranks.overall.name}
            </th>
            <th
              className={`${index <= 2 ? "text-black" : "text-white"} text-xl`}
            >
              {user.honor}
            </th>
            <th
              className={`${index <= 2 ? "text-black" : "text-white"} text-xl`}
            >
              {user.codeChallenges.totalCompleted}
            </th>
          </tr>
        ))}
    </table>
  );
}

export default Table;
