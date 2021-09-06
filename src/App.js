import React from "react";
import MainForm from "./components/MainForm";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'PT Sans', sans-serif;
  }
  html {
    min-width: 700px;
  }
`;

const AppContainer = styled.div`  
  width:100%;
  min-width: 700px;
  height: 100%;
  margin: 5em 0;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <MainForm />
    </AppContainer>
  );
};

export default App;
