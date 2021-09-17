import React from 'react';
import {Redirect} from 'react-router';
import {cookies} from '../../App'
import Chat, {Page} from "../Chat/Chat";
import Canvas from "../Canvas/Canvas";
import Score from "./Score";
import MyEditor from "../Editor/MyEditor";

import './Page.css';

const Room = () => {
  // TODO: react-flash-message if redirect
  return !cookies.get('name') ? <Redirect push to="/"/> : (
    <Page className="Page">
      <Canvas/>
      <Score/>
      <div className="Page__InteractiveElements">
        <MyEditor />
        <Chat />
      </div>
    </Page>
  );
};

export default Room;