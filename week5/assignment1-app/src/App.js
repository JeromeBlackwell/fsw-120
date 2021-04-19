import { Switch, Route } from "react-router-dom"

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
          <Navbar/>
          <switch>
              <Route path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/Services" component={Services}/>
          </switch>
      </div>
    )
}


export default App;
