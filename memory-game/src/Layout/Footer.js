import React from "react";
import styled from "styled-components";

//styled components
const FooterWrapper = styled.div`
   display: flex;
   justify-content: center;
   margin: 25px 0;
   background-color: white;
   padding: 20px;
`;

const FooterText = styled.span``;
const Footer = () => {
   return (
      <FooterWrapper>
         <FooterText>
            Made By <a href="https://www.github.com/c19h3r">github/@C19h3r</a>
         </FooterText>
      </FooterWrapper>
   );
};

export default Footer;
