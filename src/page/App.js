import React from 'react';
import './App.css';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import { createGlobalStyle } from 'styled-components';
import { Carrinho } from '../components/carrinho/Carrinho';

const EstilosGlobais = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a{
    text-decoration: none;
  }
`

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <EstilosGlobais/>
        <Header/>
        <Main/>
        <Carrinho/>
        <Footer/>
      </div>
    );
  }
}

export default App;