import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";
import Message from "./Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      username: "Rafan",
      text: "I am a super power and I like superman as well as motu patlu.",
    },
    {
      username: "Raifa",
      text: "I am a decent girl and I like Eyaana very much.",
    },
  ]);
  const [username, setUsername] = useState("");

  // useEffect(() => {
  //   console.log(input);
  //   console.log(messages);
  // });

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    //all the logic to send a message here.
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Messenger clone by Arick!</h1>
      <h2>Welcome {username}</h2>

      <form>
        <FormControl>
          <InputLabel>Enter message</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send
          </Button>
        </FormControl>
      </form>

      {messages.map((msg) => (
        <Message username={msg.username} text={msg.text}></Message>
      ))}
    </div>
  );
}

export default App;
