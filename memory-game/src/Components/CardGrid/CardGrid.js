import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardGridWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(5, 1fr);
   row-gap: 50px;
   column-gap: 50px;
`;

function CardGrid({ characterList, onCardClick, clikedList, gameOver }) {
   const CardList = characterList.map((item, idx) => {
      return (
         <Card
            key={idx}
            name={item.name}
            imageURL={item.imageUrl}
            onCardClick={onCardClick}
            clikedList={clikedList}
            GameOver={gameOver}
         />
      );
   });

   return <CardGridWrapper>{CardList}</CardGridWrapper>;
}

export default CardGrid;
