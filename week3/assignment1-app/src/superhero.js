import React from "react"
function shoot() {
    alert("you clicked me")
}
class Card extends React.Component {
    mouseMove() {
        alert("Your mouse is over the picture")
    }
    render() {
        return (
            
            <div style={{backgroundColor: "gray"}} onClick={shoot}> 
                <h2 style={{fontSize: 40}}>{this.props.card.name}</h2>
                <h5 style={{fontSize: 30}}>{this.props.card.show}</h5>
                <p style={{color: "whitesmoke"}}>{this.props.card.catchPhrase}</p>
                <img src={this.props.card.imageName} onMouseMove={this.mouseMove}/>
                <hr/>
            </div>
        )
    }
}
export default Card