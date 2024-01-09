import { useEffect, useState } from "react";
import "./App.css";
import JokeList from "./JokeList";
import { BASE_URL } from "./baseApiUrl";

function App() {
  const [jokes, setJokes] = useState([]);

  const fetchJoke = async () => {
    try {
      const res = await fetch(`${BASE_URL}/get-jokes`);
      const result = await res.json();
      setJokes(result.jokes);
    } catch (err) {
      console.log(err);
      alert("something went wrong");
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="App">
      <h1>Programming Jokes</h1>
      <a href={"/admin"}>Go to Admin Page</a>
      <hr />
      <JokeList jokes={jokes} />
    </div>
  );
}

export default App;
