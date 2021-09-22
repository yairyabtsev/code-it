import React, {useState, useRef, useEffect} from "react";
import MUI_Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/styles';
import {Redirect} from 'react-router';

import logo from '../../assets/logo.png';
import './Welcome.css';
import {cookies} from "../../App";
import io from "socket.io-client";

export const darker = '#8D586C';
export const dark = '#D58677';
export const light = '#F1F0F0';
export const lighter = '#F1F0F0';

export const Button = withStyles({
  root: {
    backgroundColor: dark,
    color: lighter,
    '&:hover': {
      backgroundColor: darker,
    },
  },
})(MUI_Button);

const Welcome = () => {
  const [name, setName] = useState();
  const [loggedIn, LogIn] = useState(false);

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect('/');

    socketRef.current.on("your id", id => {
      if (!cookies.get('id'))
        cookies.set('id', id, {path: '/'});
    })

    socketRef.current.on("hash of session", hash => {
      if (!cookies.get('hash'))
        cookies.set('hash', hash, {path: '/'});
      LogIn(true);
    })
  }, []);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    cookies.set('name', name, {path: '/'});
    const userObject = {
      id: cookies.get("id"),
      name: cookies.get("name"),
    };
    socketRef.current.emit("add user", userObject);
  }


  return loggedIn ? <Redirect push to="/game"/> : (
    <div className="Welcome">
      <div className="Welcome__Logo">
        <img src={logo} alt="Code-it logo" onClick={() => window.location.reload()}/>
      </div>
      <header className="Welcome-header">
        <p>
          <b>&lsquo;Code <code>it</code>!&rsquo;</b> is a multiplayer web game in<br/>
          which you can challenge other people to<br/> find out whose code is <i>stronger</i>.
        </p>
        <div className="Welcome-form">
          <form onSubmit={handleSubmit} autoComplete="off">
            <input
              name="user-name"
              required
              autoFocus
              maxLength={32}
              placeholder="Name"
              value={name}
              onChange={handleChange}
            /><br/>
            <Button type="submit">Play!</Button>
          </form>
        </div>
      </header>
      {
        // TODO: footer: we use cookies, please accept it.
      }
    </div>
  );
};

export default Welcome;