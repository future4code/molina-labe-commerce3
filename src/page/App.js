import React from 'react';
import './App.css';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Main from '../components/main/Main';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;