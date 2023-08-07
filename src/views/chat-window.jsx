import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { WS_URL } from "../constants/constants";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
// import '../styles/list.css';
import "../styles/messages.css";
import "../styles/mainmenu.css";

export const ChatWindow = () => {
  const [messageHistory, setMessageHistory] = useState(["hi"]);
  const location = useLocation();
  // console.log('location', location.state.list)
  let data = location.state.list;
  let tempHistory = messageHistory;
  const { lastJsonMessage, lastMessage, sendMessage } = useWebSocket(WS_URL);
  const messages = [
    "Alex: Hello adam, how are you today?",
    "Adam: Hello Alex, I am doing fine, thank you.",
    "Alex: Hello adam, how are you today?",
    "Adam: Hello Alex, I am doing fine, thank you.",
    "Alex: Hello adam, how are you today?",
    "Adam: Hello Alex, I am doing fine, thank you.",
    "Alex: Hello adam, how are you today?",
    "Adam: Hello Alex, I am doing fine, thank you.",
    "Alex: Hello adam, how are you today?",
    "Adam: Hello Alex, I am doing fine, thank you.",
    "Alex: Hello adam, how are you today?",
    "Adam: Hello Alex, I am doing fine, thank you.",
  ];

  useEffect(() => {
    // console.log("Did component mount");
    // console.log(data);
    sendMessage(data);
    // for (let val in data) console.log(data);
    console.log("Sent: Data as follows: ", data);
    // sendJsonMessage(data);
  }, []);

  useEffect(() => {
    console.log("Recieved ", lastMessage);
    if (lastMessage !== null) {
      tempHistory.push(lastMessage.data);
    }
    setMessageHistory(tempHistory);
  }, [lastMessage]);

  return (
    <div className="screen">
      {/* <button onClick={sender}>
        Click Me to send 'Hello'
      </button> */}
      <div className="list-container">
        {messageHistory.map((item) => (
          <div className="message">
            <h2>{item}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
