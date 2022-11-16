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

  if (data.length < 1) return <div>Loading ...</div>;
  return (
    <table className=" border w-[80%] m-auto backdrop-blur-md border-gray-500 ">
      <tr className="border border-gray-500 ">
        {categories.map((category) => (
          <th className="text-white">{category}</th>
        ))}
      </tr>
      {data
        .sort((a, b) => b.ranks.overall.score - a.ranks.overall.score)
        .map((user, index) => (
          <tr>
            <th className="text-white ">{index + 1}</th>

            <th className="text-white">
              {" "}
              <a href={`https://www.codewars.com/users/${user.username}`}>
                {user.username}{" "}
              </a>
            </th>

            <th className="text-white">{user.ranks.overall.score}</th>
            <th className="text-white">{user.ranks.overall.name}</th>
            <th className="text-white">{user.honor}</th>
            <th className="text-white">{user.codeChallenges.totalCompleted}</th>
          </tr>
        ))}
    </table>
  );
}

export default Table;
