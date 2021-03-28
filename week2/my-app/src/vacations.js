import React from "react"

function vacations(props) {
    return (
        <div>
            <h3 style={{backgroundColor: props.BackgroundColor || "red"}}>
                {props.place}
                {props.price}
                {props.timeToGo}
                {props.priceline}
            </h3>
        
        </div>
    )
}

export default vacations