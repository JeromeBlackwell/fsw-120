import React from "react"
import SuperHero from "./components/SuperHero"
import './App.css';
function App() {
  return (
    <div className="App">
      <SuperHero />
    </div>
  );
}
export default App;

import React from "react"
import Card from "./SuperHeroCard"
import data from "./shData"
function SuperHero() {
    const newArray = data.map(card => <Card key={card.id} card={card} />)
  return (
    <div className="cards">
      {newArray}
    </div>
  );
}
export default SuperHero