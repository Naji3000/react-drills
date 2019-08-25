import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from './components/Image'

class App extends Component {
  render() {
    return (

      <div className="App">

        <Image catImage={'https://petharbor.com/get_image.asp?RES=Detail&ID=A606329&LOCATION=AZHS1'} />

      </div>
    );
  }
}

export default App;
