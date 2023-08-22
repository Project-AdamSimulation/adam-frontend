import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { WS_URL } from "../constants/constants";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import { useLocation } from "react-router-dom";
import "../styles/messages.css";
import "../styles/mainmenu.css";
import "../styles/list.css";

export const ChatWindow = () => {
  const [messageHistory, setMessageHistory] = useState(["Abcd", "Abcd", "Abcd", "Abcd", "Abcd", "Abcd", "Abcd", "Abcd", "Abcd", "Abcd", "Abcd", "Abcd", "Abcd", "Abcd", "Abcd", "Abcd", "Abcd", "Abcd"]);
  const location = useLocation();
  let data = location.state.list;
  let tempHistory = messageHistory;
  const { lastMessage, sendMessage } = useWebSocket(WS_URL);

  useEffect(() => {
  
    sendMessage(data);
   
    console.log("Sent: Data as follows: ", data);
  
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
      <div className="list-container">
        {messageHistory.length > 0 ? (
            <div>
            {messageHistory.map((item) => (
                <div className="message">
                  <h2>{item}</h2>
                </div>
            ))}
            </div>
          
          ) : null}  
      </div>
    </div>
  );
};
