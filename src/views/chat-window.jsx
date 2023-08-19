import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { WS_URL } from "../constants/constants";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import { useLocation } from "react-router-dom";
// import '../styles/list.css';
import "../styles/messages.css";
import "../styles/mainmenu.css";

export const ChatWindow = () => {
  const [messageHistory, setMessageHistory] = useState(["hi"]);
  const location = useLocation();
  // console.log('location', location.state.list)
  let data = location.state.list;
  let tempHistory = messageHistory;
  const { lastMessage, sendMessage } = useWebSocket(WS_URL);

  useEffect(() => {
    // console.log("Did component mount");
    // console.log(data);
    sendMessage(data);
    // for (let val in data) console.log(data);
    console.log("Sent: Data as follows: ", data);
    // sendJsonMessage(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("Recieved ", lastMessage);
    if (lastMessage !== null) {
      tempHistory.push(lastMessage.data);
    }
    setMessageHistory(tempHistory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
