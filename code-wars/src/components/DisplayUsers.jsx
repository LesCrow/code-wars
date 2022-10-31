import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";

function DisplayUsers({ user }) {
  const [data, setData] = useState([]);

  const getUser = () => {
    axios.get(user).then((response) => {
      setData(response.data);
    });
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <UserCard user={data} />
    </div>
  );
}

export default DisplayUsers;
