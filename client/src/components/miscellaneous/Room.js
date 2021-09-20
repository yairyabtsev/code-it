import React, { useEffect, useState } from 'react';
import {Redirect} from 'react-router';
import {cookies} from '../../App'
import Chat, {Page} from "../Chat/Chat";
import Canvas from "../Canvas/Canvas";
import Score from "./Score";
import MyEditor from "../Editor/MyEditor";

import './Page.css';

const Room = () => {
  const nameExists = cookies.get('name');
  const [mainPageOpened, setMainPageOpened] = useState(nameExists);

  useEffect(() => {
    console.log(mainPageOpened);
    if (!mainPageOpened) {
      window.confirm('You need to choose a name. Redirecting to the Welcome page...');
      setMainPageOpened(true);
    }
  }, [mainPageOpened]);

  return mainPageOpened && (
    !nameExists ? (
      <Redirect push to="/"/>
    ): (
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
    )
  );
};

export default Room;