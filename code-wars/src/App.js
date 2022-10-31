import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import DisplayUser from "./components/DisplayUser";

function App() {
  const [data, setData] = useState([]);

  const getUser = () => {
    axios
      .get("https://www.codewars.com/api/v1/users/Lescrow")
      .then((response) => {
        setData(response.data);
      });
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <DisplayUser user={data} />
    </div>
  );
}

export default App;
