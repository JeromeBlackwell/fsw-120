import { Link, Switch, Route } from "react-router-dom"
import React from 'react'
import Header from "./Header"
import Navbar from "./Navbar"
import Main from "./Main"
import Footer from "./Footer"

import Home from "./Home"
import About from "./About"
import Services from "./Services"

function App() {
    return (
      <div>
          <Navbar class="navbar"/>
          <Switch>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/Services">Services</Link>
          </Switch>
      </div>
    )
}


export default App;