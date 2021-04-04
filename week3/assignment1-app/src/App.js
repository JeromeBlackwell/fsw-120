import React,{Component} from "react"
import Superhero from "./superhero"
import Shdata from "./shdata"
import './App.css';
// function App() {
  class App extends Component {
    render () {
    return (
    <div className="App">
    {Shdata.map (card => {
      console.log (card)

      return(<Superhero card ={card} />)
    })}
      
    </div>
    )}
  }   
// }
export default App;