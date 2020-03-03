import React from 'react';
import Conversor from './components/conversor/conversor'

export default class App extends React.Component {
  render(){
    return(
      <div className="App">
        <Conversor moedaA="USD" moedaB="BRL"/>
      </div>
    );
  }
}

