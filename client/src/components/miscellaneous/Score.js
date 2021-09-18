import React from "react";

import logo from '../../assets/logo.png';
import './Score.css';

const Score = ({ score = 0 }) => {
  return (
    <div className="Score">
      <span>Score:</span>&nbsp;{score}
      <div className="Score__Logo">
          <a href="/"><img src={logo} alt="Code-it logo" /></a>
        </div>
    </div>
  );
};

export default Score;