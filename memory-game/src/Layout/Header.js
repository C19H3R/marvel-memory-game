import React from "react";
import styled from "styled-components";

//styled Components
const HeaderWrapper = styled.div`
   display: flex;
   justify-content: center;
   background-color: rebeccapurple;
`;
const HeaderText = styled.h1`
   color: white;
`;

const Header = () => {
   return (
      <HeaderWrapper>
         <HeaderText>SpiderMan Memory Game</HeaderText>
      </HeaderWrapper>
   );
};

export default Header;
