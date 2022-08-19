import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

// images
import backgroundImage from './assets/theWitcherHell.png'

// components
import Header from './components/header/Header';
import Main from './components/main/Main';

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
const Div = styled.div`
background-image: url(${backgroundImage});
background-position: center center;
background-repeat: no-repeat;
background-size: cover;
width: 100%;
height: 100vh;
`

export default class App extends React.Component {
  render() {
    return (
      <Div>
        <GlobalStyles/>
        <Header/>
        <Main/>
      </Div>
    )
  }
}