import React from "react"

function Badge(props) {


    return (
        <div>
            <h1>Fsw-120 Week4 Project2</h1>
            {props.firstName}
            <br></br>
            {props.lastName}
            <br></br>
            {props.email}
            <br></br>
            {props.placeOfBirth}
            <br></br>
            {props.phone}
            <br></br>
            {props.favoriteFood}
        </div>
    )
}

export default Badge