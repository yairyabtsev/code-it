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
      <div className="Page__InteractiveElements">
        <div className="Page__Visual">
          <Canvas />
          <MyEditor />
        </div>
        <div className="Page__Functional">
          <Score />
          <Chat />
        </div>
      </div>
    </Page>
  );
};

export default Room;