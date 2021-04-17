import { getDefaultNormalizer } from "@testing-library/dom"
import { render } from "@testing-library/react"
import React, {Component} from "react"

class App extends Component {
  constructor() {
    super ()
    this.state = {
        firstName: "",
        lastName: "",
        email: "",
        PlaceOfBirth:"",
        Phone:"",
        FavoriteFood: ""
        }
        this.handleChange = this.handleChange.bind(this) 
    }

render() {
  return (
    <form onSubmit={this.handleSubmit}>
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
        <br />
            <textarea
            value={"some default value"}
            onChange={this.handleChange}
            
        />

            <h1>{this.state.firstName} {this.state.lastName}</h1>
            <h1>{this.state.email} {this.state.placeOfBirth}</h1>
            <h1>{this.state.phone} {this.state.favoriteFood}</h1>
            <button><Submit></Submit></button>
        </form>

        )  
    }
}
  default export App