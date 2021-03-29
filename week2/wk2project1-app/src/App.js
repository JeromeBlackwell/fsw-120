import React from 'react';
import './App.css';
import Bloglist from "./bloglist"
import Navbar from "./header"
import Footer from "./footer"
import Blogpost from "./blogpost"

function = App() => { 
  return (
    <div className="App">
      <div className="Lists">
      <Navbar/>
      <Header/>
      <Bloglist/><hr></hr>
      <Blogpost/>
      <Footer/>
    </div>
      </div>
  );
}

export default App;