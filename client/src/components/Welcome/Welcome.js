import React, {Component} from "react";
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

const WelcomeButton = withStyles({
  root: {
    backgroundColor: '#FFE184',
    color: '#282C34',
    '&:hover': {
      backgroundColor: '#FF9666',
    },
  },
})(MUI_Button);

export default class Welcome extends Component {
  socket;

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      inputError: false,
      loggedIn: false,
    };
  }

  componentDidMount() {
    this.socket = io.connect('/');
    this.socket.on("hash of session", hash => {
      if (!cookies.get('hash')) {
        cookies.set('hash', hash, {path: '/'});
      }
      this.setState({ loggedIn: true });
    })
  }

  handleChange(event) {
    this.setState({ value: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    const { value } = this.state;
    if (value.length < 3) {
      this.setState({ inputError: true });
      return;
    }

    cookies.set('id', 111);
    cookies.set('name', this.state.value, {path: '/'});
    const userObject = {
      id: cookies.get("id"),
      name: cookies.get("name"),
    };
    this.setState({ loggedIn: true });
    this.socket.emit("add user", userObject);
  }

  render() {
    return this.state.loggedIn ? <Redirect to="/game" /> : (
      <div className="Welcome">
        <div className="Welcome__Logo">
          <img src={logo} alt="Code-it logo" onClick={() => window.location.reload()} />
        </div>
        <header className="Welcome-header">
          <p>
            <b>&lsquo;Code <code>it</code>!&rsquo;</b> is a multiplayer web game in<br/>
            which you can challenge other people to<br/> find out whose code is <i>stronger</i>.
          </p>
          <div className="WelcomeForm">
            <form onSubmit={this.handleSubmit.bind(this)} autoComplete="off">
              <div className="PapaInput">
                <input
                  className={this.state.inputError ? 'errorInput' : ''}
                  name="user-name"
                  aria-label="user name"
                  required
                  autoFocus
                  maxLength={32}
                  placeholder='Your name'
                  value={this.state.value}
                  onChange={this.handleChange.bind(this)}
                  onFocus={() => this.setState({ inputError: false })}
                />
                <span className={`ErrorMessage ${!this.state.inputError ? 'hidden' : ''}`}>
                  Your name must be at least 3 characters long
                </span>
              </div>
              <WelcomeButton type="submit">Play!</WelcomeButton>
            </form>
          </div>
        </header>
      </div>
    );
  }
}
