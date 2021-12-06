import React, { useState } from "react";
import styled from "styled-components";

const ScoreBoardWrapper = styled.div`
   display: flex;
   justify-content: center;
   gap: 25px;
`;
const CurrentScore = styled.span`
   font-size: 22px;
`;
const HighScore = styled.span`
   font-size: 22px;
`;

function ScoreBoard({ currentScore }) {
   const [highScore, setHighScore] = useState(0);
   if (currentScore > highScore) {
      setHighScore(currentScore);
   }
   return (
      <ScoreBoardWrapper>
         <CurrentScore>Current Score - {currentScore}</CurrentScore>
         <HighScore>High Score - {highScore}</HighScore>
      </ScoreBoardWrapper>
   );
}

export default ScoreBoard;
