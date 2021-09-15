import React from 'react';
import {Redirect} from 'react-router';
import {cookies} from './App'
import Chat, {Page} from "./Chat";
import Canvas from "./Canvas";
import Score from "./Score";
import MyEditor from "./MyEditor";

const Room = () => {
  // TODO: react-flash-message if redirect
  return !cookies.get('name') ? <Redirect push to="/"/> : (
    <Page>
      <Canvas/>
      <Score/>
      <Chat/>
      <MyEditor/>
    </Page>
  );
};

export default Room;