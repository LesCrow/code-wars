import "./App.css";

import DisplayUsers from "./components/DisplayUsers";

function App() {
  const users = [
    "https://www.codewars.com/api/v1/users/Lescrow",
    "https://www.codewars.com/api/v1/users/Nicolas-CARRERE",
    "https://www.codewars.com/api/v1/users/Damsbot64",
    "https://www.codewars.com/api/v1/users/Pupuce-64",
    "https://www.codewars.com/api/v1/users/FaannY",
    "https://www.codewars.com/api/v1/users/Tomahawkiwi",
    "https://www.codewars.com/api/v1/users/e-genie",
    "https://www.codewars.com/api/v1/users/MaximeB29",
    "https://www.codewars.com/api/v1/users/Antoine64160",
    "https://www.codewars.com/api/v1/users/warasil",
  ];

  return (
    <div>
      {users.map((user) => (
        <DisplayUsers user={user} />
      ))}
    </div>
  );
}

export default App;
