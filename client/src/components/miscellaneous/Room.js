import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router';
import {cookies} from '../../App'
import Chat, {Page} from "../Chat/Chat";
import Canvas from "../Canvas/Canvas";
import Score from "./Score";
import MyEditor from "../Editor/MyEditor";

import quitGame from '../../assets/quit.svg';
import './Page.css';
import {Resize, ResizeVertical, ResizeHorizon} from "react-resize-layout";

const Room = () => {
  const [name, setName] = useState(cookies.get('name'));
  const [mainPageOpened, setMainPageOpened] = useState(
    cookies.get('name')
    // cookies.get('name') && cookies.get('id') && cookies.get('hash') && true
  );

  useEffect(() => {
    if (!mainPageOpened) {
      window.alert('You need to choose a name. Redirecting to the Welcome page...');
      setMainPageOpened(true);
    }
  }, [mainPageOpened]);

  const handleClick = () => {
    // TODO remove the user from the database
    if (window.confirm('Are you sure you want to quit the game? Your progress will be lost!')) {
      setName(null);
      cookies.remove('name');
      cookies.remove('id');
    }
  }

  return mainPageOpened && (
    !name ? <Redirect to="/"/> : (
      <Page className="Page">
        <div className="Page__InteractiveElements">
          <div className="Page__Visual">
            <img
              className='Page__QuitIcon'
              width={32}
              height={32}
              src={quitGame}
              alt='Quit the game'
              onClick={handleClick}
            />
            {/*<Resize handleWidth="5px" handleColor="#777">*/}
            {/*  <ResizeVertical>*/}
                <Canvas/>
              {/*</ResizeVertical>*/}
              {/*<ResizeVertical minHeight="50px">*/}
                <MyEditor/>
              {/*</ResizeVertical>*/}
            {/*</Resize>*/}
          </div>
          <div className="Page__Functional">
            <Score/>
            <Chat/>
          </div>
        </div>
      </Page>
    )
  );
};

export default Room;