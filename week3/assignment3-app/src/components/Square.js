import React from "react"
import "../App.css"

function Square (props) {

    const boxColor ={
        backgroundColor:props.color
    }

    return (
        <div>
        <h1 style ={boxColor}>{props.phrase}</h1>
        </div>  
    )
}



export default Square