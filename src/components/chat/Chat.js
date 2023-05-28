import React, { useState, useEffect, useRef } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import ChatImage from '../../images/chat.svg';
import Message from "./Message";
import { connect } from 'react-redux';


function Chat({isAuthenticated}) {
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const chatContainerRef = useRef(null); // Referencia al contenedor del chat

  useEffect(() => {
    // Get the username from local storage or prompt the user to enter it
    const storedUsername = sessionStorage.getItem("nickname");
    if (storedUsername) {
      setUsername(storedUsername);
    }

    // Connect to the WebSocket server with the username as a query parameter
    const newSocket = new W3CWebSocket("ws://localhost:8000/ws/chat/");
    setSocket(newSocket);

    newSocket.onopen = () => console.log("WebSocket connected");
    newSocket.onclose = () => console.log("WebSocket disconnected");

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      newSocket.close();
    };
  }, [username]);

  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setMessages((prevMessages) => [...prevMessages, data]);
      };
    }
  }, [socket]);

  useEffect(() => {
    // Load the last 100 messages when the component mounts
    const loadMessages = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/messages/");
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.log("Error loading messages:", error);
      }
    };

    loadMessages();
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    if (message && socket) {
      const data = {
        message: message,
        username: username,
        timestamp: new Date().toISOString(),
      };
      socket.send(JSON.stringify(data));
      setMessage("");
    }
  };

  return (
    <div style={{ maxHeight: '400px', maxWidth: '600px' }} className="container-md p-0 mt-5 mb-5 card">
      <div className="bg-dark card-header">
        <img className='icon' src={ChatImage} alt='chat' />
        <span className='card-title'>Chat</span>
      </div>

      <div
        ref={chatContainerRef}
        style={{ maxHeight: '400px', position: 'relative', overflowY: 'auto'}}
        className="card-body"
        data-mdb-perfect-scrollbar="true"
      >
        {messages.map((message, index) => (
          <div key={index}>
            <Message message={message} />
          </div>
        ))}
      </div>

      {isAuthenticated ? (
        <form onSubmit={handleMessageSubmit} className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
          <input
            type="text"
            className="form-control"
            placeholder="Escriba el mensaje ..."
            aria-describedby="button-addon2"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <button className="btn btn-warning" type="submit" id="button-addon2">
            Enviar
          </button>
        </form>
      ) : (
        <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
          <p className="m-0"> <a href="/auth">Inicie sesión</a> en su cuenta para chatear.</p>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(Chat);
