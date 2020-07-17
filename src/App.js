import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";
import Message from "./Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(["a", "b", "c"]);
  useEffect(() => {
    console.log(input);
    console.log(messages);
  });

  const sendMessage = (event) => {
    event.preventDefault();
    //all the logic to send a message here.
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello world!</h1>

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
        <Message text={msg}></Message>
      ))}
    </div>
  );
}

export default App;
