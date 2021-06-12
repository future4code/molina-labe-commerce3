import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import { createGlobalStyle } from 'styled-components';

const EstilosGlobais = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    text-align: center;
  }

  span {
    font-weight: bold;
    color: #a5a5a5;
  }

  :root {
    --vermelho: #FC3D21;
    --azul: #0B3D91;
  }
`

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <EstilosGlobais/>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;