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
          <Navbar class="navbar"/>
          <Switch>
              <Route path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/Services" component={Services}/>
          </Switch>
      </div>
    )
}


export default App;
