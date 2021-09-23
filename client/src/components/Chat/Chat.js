import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import io from "socket.io-client";
import {cookies} from "../../App";

import './Chat.css';

const Chat = () => {
  const yourID = cookies.get('id');
  const thisHash = cookies.get('hash');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect('/');

    socketRef.current.on("message"+thisHash, (message) => {
      receiveMessage(message);
    })
  }, []);

  function receiveMessage(message) {
    // console.log(message.id)
    setMessages(oldMsgs => [...oldMsgs, message]);
  }

  function sendMessage(e) {
    e.preventDefault();
    const messageObject = {
      body: message,
      id: yourID,
      name: cookies.get("name"),
      hash: thisHash,
    };
    setMessage("");
    socketRef.current.emit("send message", messageObject);
  }

  function handleChange(e) {
    setMessage(e.target.value);
  }

  return (
    <Page className="Chat">
      <Container className="Chat__Content">
        {messages.map((message, index) => (
          message.id === yourID ?
            (message.body && <MyRow key={index}>
              <MyMessage>
                {message.body}
              </MyMessage>
            </MyRow>) :
            (message.body && <PartnerRow key={index}>
              {isNameShown(messages, index) && <PartnerName>{message.name}</PartnerName>}
              <PartnerMessage>
                {message.body}
              </PartnerMessage>
            </PartnerRow>)
        ))}
      </Container>
      <Form className="Chat__Form" onSubmit={sendMessage}>
        <TextArea value={message} onChange={handleChange} placeholder="Say something..."/>
        <Button className="Chat__FormButton">Send</Button>
      </Form>
    </Page>
  );
};

export default Chat;

function isNameShown(messages, i) {
  let j = i - 1;

  while (j >= 0 && !messages[j].body) {
    j--;
  }

  return j === -1 || messages[j]?.name !== messages[i].name;
}


export const Page = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  background-color: #46516e;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  overflow-y: auto;
  width: 400px;
  padding-bottom: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 11px;
  font-size: 17px;
  background-color: transparent;
  border-top: 1px solid #F8F6F5;
  border-bottom: 2px solid transparent;
  outline: none;
  color: lightgray;
  letter-spacing: 1px;
  line-height: 20px;

  ::placeholder {
    color: lightgray;
  }

  :focus {
    border-top: 2px solid #F8F6F5;
    border-bottom-color: #F8F6F5;
    padding-top: 10px;
  }
`;

export const Button = styled.button`
  background-color: #D58677;
  color: #f1f0f0 !important;
  width: 100%;
  border: none;
  height: 50px;
  border-radius: 10px;
  color: #46516e;
  font-size: 17px;
  transition: 0.3s;

  &:hover {
    background-color: #8D586C;
    cursor: pointer;
  }
`;

const Form = styled.form`
  width: 400px;
`;

const MyRow = styled.div`
  color: #F1F0F0;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const MyMessage = styled.div`
  width: 160px;
  background-color: #DE755E;
  color: #333;
  padding: 6px;
  margin-right: 10px;
  border-radius: 8px 8px 16px 8px;
  overflow-wrap: anywhere;
`;

const PartnerRow = styled(MyRow)`
  justify-content: flex-start;
  flex-direction: column;
`;

const PartnerMessage = styled.div`
  width: 160px;
  background-color: #658EAB;
  color: #F4F1F6;
  padding: 6px;
  margin-left: 10px;
  border-radius: 8px 8px 8px 16px;  
`;

const PartnerName = styled.span`
  margin-left: 10px;
  margin-bottom: 5px;
  font-weight: bold;
`;
