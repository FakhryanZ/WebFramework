import React, { Component } from "react";
import Subheader from "./Subheader";

class Header extends Component{
  render(){
    return(
      <div><h2>Halo TI-3G Polinema</h2></div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Subheader />
      <h1>Hello</h1>
    </div>
  );
}

export default App;
