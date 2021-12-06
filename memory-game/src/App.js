import React from "react";
//components
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
//App Wrapper and styles
import AppWrapper from "./AppWrapper";
import "./assets/style.css";

function App() {
   return (
      <AppWrapper>
         <Header />
         <Main />
         <Footer />
      </AppWrapper>
   );
}

export default App;
