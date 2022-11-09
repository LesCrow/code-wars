import React, { useEffect, useState } from "react";
import axios from "axios";
import users from "../constants/users";
import UserCard from "./UserCard";
import LeaderBoard from "./LeaderBoard";

function MainContent() {
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
    <div>
      <LeaderBoard />
      {data
        .sort((a, b) => b.ranks.overall.score - a.ranks.overall.score)
        .map((user, index) => (
          <UserCard index={index} key={user.id} user={user} />
        ))}
    </div>
  );
}

export default MainContent;
