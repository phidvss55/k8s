import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./baseApiUrl";
import "./App.css";

const AdminScreen = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const onSubmit = async () => {
    const res = await fetch(`${BASE_URL}/post-joke`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        joke: text,
      }),
    });
    const result = await res.json();
    console.log(result);
    navigate("/");
  };

  return (
    <div className="App">
      <h1>Enter New Joke</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={onSubmit}>Submit</button>
      <br />
      <a href={"/"}>Back to home page</a>
    </div>
  );
};

export default AdminScreen;
