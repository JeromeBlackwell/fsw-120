import React from "react"

function Colored(props) {
    return (
        <div>
            <h3 style={{backgroundColor: props.BackgroundColor || "red"}}>
                {props.title}
                {props.subtitle}
                {props.information}
            </h3>
        
        </div>
    )
}

export default Colored