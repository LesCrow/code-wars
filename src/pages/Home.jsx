import axios from "axios";
import { useState, useEffect } from "react";

import UserCard from "../components/UserCard";
import users from "../constants/users";

function Home() {
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

  if (data.length < 1)
    return (
      <div>
        <img src="../Images/icon-spinner.gif" alt="loading..." />
      </div>
    );

  return (
    <div>
      <div className="border h-full  bg-gradient-to-r from-black via- to-red-500">
        {data
          .sort((a, b) => b.honor - a.honor)
          .map((user, index) => (
            <UserCard index={index} key={user.id} user={user} />
          ))}
      </div>
    </div>
  );
}

export default Home;
