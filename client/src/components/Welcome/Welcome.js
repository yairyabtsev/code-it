import React, { Component } from 'react';
import MUI_Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import { Redirect } from 'react-router';
import {cookies} from '../../App'

import logo from '../../assets/logo.png';
import './Welcome.css';

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

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      loggedIn: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log('name: ' + this.state.value);
    cookies.set('name', this.state.value, { path: '/' });
    console.log(cookies.get('name'));

    this.setState({ loggedIn: true });
  }

  render() {
    return this.state.loggedIn ? <Redirect push to="/game" /> : (
      <div className="Welcome">
        <div className="Welcome__Logo">
          <img src={logo} alt="Code-it logo" onClick={() => window.location.reload()} />
        </div>
        <header className="Welcome-header">
          <p>
            <b>&lsquo;Code <code>it</code>!&rsquo;</b> is a multiplayer web game in<br/>
            which you can challenge other people to<br/> find out whose code is <i>stronger</i>.
          </p>
          <div className="Welcome-form">
            <form onSubmit={this.handleSubmit}>
              <input
                name="user-name"
                required
                autoFocus
                maxLength={32}
                placeholder="Name"
                value={this.state.value}
                onChange={this.handleChange}
              /><br/>
              <Button type="submit">Play!</Button>
            </form>
          </div>
        </header>
      </div>
    );
  }
}