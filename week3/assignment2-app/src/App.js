import React, {Component} from "react"
import DiceBox from "./dicebox"
import './App.css';
// function App() {
  class App extends Component {
    render () {
    return (
    <div className="App">
    {DiceBox.map (card => { 
      console.log (card) 
      return(<DiceBox card ={card} />)
    })}
    </div>
  )}
}
export default App;