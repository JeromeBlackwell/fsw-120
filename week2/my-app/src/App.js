import React from "react"
import './App.css'
import Colored from "./colored.js"

function App() {
  return (
    <div>
       <h1>Colored Info Boxes</h1>
       
       <Colored BackgroundColor= {"magenta"} 
        title={<h3>Coming to America</h3>}
        subtitle ={<h4>Comedy, Romance</h4>}
        information ={<h5>A Prince Akeem comes to America to find his Princess.</h5>}
       />
       <Colored BackgroundColor= {"Aqua"} 
        title={<h3>Officer and A Gentleman</h3>}
        subtitle ={<h4>Romance, Drama</h4>}
        information ={<h5>Zack, a United States Navy Aviation Officer Candidate meets his first true girlfriend during his training. </h5>}
       />
       <Colored BackgroundColor= {"yellow"} 
        title ={<h3>Arrival</h3>}
        subtitle ={<h4>Science Fiction, Drama, Suspense</h4>}
        information ={<h5>When mysterious spacecraft land across the globe, expert translator Louise Banks is sent to decipher their intent.</h5>}
       />
       <Colored BackgroundColor= {"green"} 
        title={<h3>Tyler Perry's Madea's Witness Protection</h3>}
        subtitle ={<h4>Comedy</h4>}
        information ={<h5>A Wall Street investment banker has been setup in a Ponzi scheme, forcing him to be put under witness protection with his family in Madea's house.</h5>}
       />
       <Colored BackgroundColor= {"red"} 
        title={<h3>Conclussion</h3>}
        subtitle ={<h4>Drama</h4>}
        information ={<h5>The true David vs Goliath story of Dr. Omalu and his quest that puts him at odds with one of the most powerful institutions of the world.</h5>}
       />
       <Colored BackgroundColor= {"pink"} 
        title={<h3>Soul</h3>}
        subtitle ={<h4>Comedy, Animation</h4>}
        information ={<h5>Joe lands a gig of his life at the best jazz club in town.</h5>}
       />
       <Colored BackgroundColor= {"silver"} 
        title={<h3>The A-Team</h3>}
        subtitle ={<h4>Action, Adventure</h4>}
        information ={<h5>A man who loves when a plan comes together, Hannibal Smith leads a close-knit team of elite operatives.</h5>}
       />
       <Colored BackgroundColor= {"teal"} 
        title={<h3>Tenent</h3>}
        subtitle ={<h4>Action, Adventure</h4>}
        information ={<h5>Fighting for the survival of the entire world, the Protagonist journeys though a twilight world of international espionage on a mission that will unfold in somthing beyond real time.</h5>}
       />
       <Colored BackgroundColor= {"violet"} 
        title={<h3>Honest Thief</h3>}
        subtitle ={<h4>Action, Suspense</h4>}
        information ={<h5>Wanting to lead an honest life, a notorious bank robber (Liam) turns himself in, only to be double crossed by two ruthless FBI agents.</h5>}
       />
       <Colored BackgroundColor= {"orange"} 
        title={<h3>Jumper</h3>}
        subtitle ={<h4>Comedy</h4>}
        information ={<h5>A young man capable of teleporting as he is chased by a secret society intent on killing him.</h5>}
       />
    </div>
  );
}

export default App