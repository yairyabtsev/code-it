import React, {useEffect, useRef} from "react";

import logo from '../../assets/logo.png';
import './Score.css';
import io from "socket.io-client";
import {cookies} from "../../App";

const Score = () => {
  const [score, setScore] = React.useState(0);
  const [injuries, setInjuries] = React.useState(0);
  const id = cookies.get('id');

  const socketRef = useRef();
  useEffect(() => {
    socketRef.current = io.connect('/');

    socketRef.current.on("score" + id, (data) => {
      setScore(data.score);
      setInjuries(data.injuries);
    })
  }, []);

  return (
    <div className="Score">
      <span>Score:</span>&nbsp;{score}<br/>
      <span>Injuries:</span>&nbsp;{injuries}
      <div className="Score__Logo">
        <a href="/"><img src={logo} alt="Code-it logo"/></a>
      </div>
    </div>
  );
};

export default Score;