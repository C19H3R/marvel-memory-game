import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   background-color: white;
   height: 200px;
   padding: 10px;
   gap: 5px;
   width: 175px;
`;
const CardImg = styled.img`
   width: 150px;
`;
const CardTitle = styled.span``;

const Card = ({ imageURL, name, onCardClick, clikedList = [], GameOver }) => {
   return (
      <CardWrapper
         onClick={() => {
            if (clikedList.find((val) => val === name) === undefined) {
               onCardClick([...clikedList, name]);
            } else {
               GameOver();
            }
         }}
      >
         <CardImg src={imageURL} />
         <CardTitle>{name}</CardTitle>
      </CardWrapper>
   );
};

export default Card;
