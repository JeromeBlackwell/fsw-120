import React from "react"
import Square from "./components/Square"
class App extends React.Component {
  
    state ={
      color1: ["red","white","white","white"]
    }

    wordChange = (event) =>{
      event.preventDefault()
      this.setState ({
        color1:  ["blue","green","purple","yellow"]
      }) 
    }

    render(){
    return (
        <div>
        <Square onClick={this.wordChange} phrase={this.state.color1} color = {this.state.color1[0]}/>
        <Square phrase="Circle"/>
        <button onClick={this.wordChange}>Click ME!</button>
        </div>
    )

}
    

}
export default App;