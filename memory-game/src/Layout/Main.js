import React, { useEffect, useState } from "react";
import styled from "styled-components";

//components
import CardGrid from "../Components/CardGrid/CardGrid";
import ScoreBoard from "../Components/ScoreBoard/ScoreBoard";

const MainWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   height: 70vh;
   width: 100%;
   gap: 100px;
`;

const randomizeArray = (array) => {
   let currentIndex = array.length,
      randomIndex;

   while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
         array[randomIndex],
         array[currentIndex],
      ];
   }
   return array;
};

const getRandomCharacters = () => {
   var API_KEY = "0e78af5390efc1526acbf78f2b0941cf";

   var url = `https://gateway.marvel.com:443/v1/public/characters?offset=1239&limit=10&apikey=${API_KEY}`;
   return fetch(url)
      .then((Response) => Response.json())
      .then((jsonRes) => {
         const { data } = jsonRes;
         const requiredResult = data.results.map((item, idx) => {
            return {
               name: item.name,
               imageUrl: `${item.thumbnail.path}/standard_xlarge.${item.thumbnail.extension}`,
            };
         });
         return randomizeArray(requiredResult);
      });
};

const Main = () => {
   const [herosList, setHerosList] = useState([]);
   const [clickedHeros, setClickedHeros] = useState([]);
   const gameOver = () => {
      setClickedHeros([]);
      alert("you clicked that hero again");
   };
   useEffect(() => {
      console.log(clickedHeros);
      getRandomCharacters().then((items) => {
         setHerosList(items);
      });
   }, [clickedHeros]);
   return (
      <MainWrapper>
         <ScoreBoard currentScore={clickedHeros.length} />
         <CardGrid
            characterList={herosList}
            onCardClick={setClickedHeros}
            clikedList={clickedHeros}
            gameOver={gameOver}
         />
      </MainWrapper>
   );
};

export default Main;
