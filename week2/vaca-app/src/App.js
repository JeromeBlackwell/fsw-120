import React from "react"

// import './App.css'
import Vacations from "./vacations"
import VacationSpotData from "./vacationSpotData"
function App() {
    let vacaComponents = vacationSpotData.map(vaca => <vaca key={vaca.id} place={vaca.place} price={vaca.price} {timeToGo=vaca.timeToGo} {pricePoint=vaca.pricePoint} />) 
  return (
    <div>
       <h1>VacationSpots using Props and Maps</h1>
        {vacaComponents}
       </div>
  );
}

export default App
