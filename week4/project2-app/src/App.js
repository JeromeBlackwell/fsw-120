// import { getDefaultNormalizer } from "@testing-library/dom"
// import { render } from "@testing-library/react"
import React, {Component} from "react"
import Badge from "./Badge"
class App extends Component {
  constructor() {
    super ()
    this.state = {
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth:"",
        phone:"",
        favoriteFood: "",
        
    badges:[]  
        }
         
    }
handleChange= (event) => {
const {name, value, type, checked} = event.target
type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name] :value})
}
handleSubmit= (event) => {
    event.preventDefault()
    console.log (this.state)

this.setState({badges : [...this.state.badges,{
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    email: this.state.email,
    placeOfBirth: this.state.placeOfBirth,
    phone: this.state.phone,
    favoriteFood: this.state.favoriteFood,  
}]})

}
render() {
  return (
    // <form onSubmit={this.handleSubmit}>
    <section>
    <form>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
        />
        <br />
        <input
            type="text"
            value={this.state.email}
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
        />
        <br />
        <input
            type="text"
            value={this.state.placeOfBirth}
            name="placeOfBirth"
            placeholder="Place of Birth"
            onChange={this.handleChange}
        />
        <br />
        <input
            type="text"
            value={this.state.phone}
            name="phone"
            placeholder="Phone"
            onChange={this.handleChange}
        />
        <br />
        <input
            type="text"
            value={this.state.favoriteFood}
            name="favoriteFood"
            placeholder="Favorite Food"
            onChange={this.handleChange}
        />
        {/* <br />
            <textarea
            value={"some default value"}
            onChange={this.handleChange}
            
        /> */}
    
    <div>
            
            <h1>{this.state.firstName} {this.state.lastName}</h1>
            <h1>{this.state.email} {this.state.placeOfBirth}</h1>
            <h1>{this.state.phone} {this.state.favoriteFood}</h1>
            <h1><button onClick={this.handleSubmit}>Submit</button></h1>
    </div>
    
        </form>
    {this.state.badges.map(
        badge =>(
            <Badge {...badge}Fsw-120 Week4 Project2 />

        )
    )}
    </section>
    
        )  
    }
}
export default App