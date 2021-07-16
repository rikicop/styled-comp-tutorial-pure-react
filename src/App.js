import React from 'react';
import Button from './Button';
import  { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

const App = () => {
  return (
    <>
    <GlobalStyle />
      <Button>I am a button</Button>
      <Button danger>I am a primary button</Button>
    </>
  )
}
export default App;
