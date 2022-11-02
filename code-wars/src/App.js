import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

import UserCard from "./components/UserCard";
import users from "./constants/users";

function App() {
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

  console.log(data);

  if (data.length < 1) return <div>Loading ...</div>;

  return (
    <div>
      <div className="h-full bg-gradient-to-r from-black via- to-red-500">
        {data
          .sort((a, b) => b.honor - a.honor)
          .map((user, index) => (
            <UserCard index={index} key={user.id} user={user} />
          ))}
      </div>
    </div>
  );
}

export default App;
