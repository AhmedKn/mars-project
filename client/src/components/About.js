import Navbar from "./Navbar"
import "../css/About.css"
import ReactPlayer from "react-player"

function About() {
  return (
    <div id="about">
      <Navbar />
      <div className="overlay"></div>
      <div className="about">
        <h1>About</h1>
        <p>The purpose of our application is to save humanity and the creatures from dissapearing.</p>
        <p>so a lot of scientsits found a mysterious planet Mars and after a lot of resaerches they found that we can live in mars but there's a lot of obstacles should be solved to create a new life and start a new beginnig.</p>
        <p>Now you can start interacting with scientists to give you the right answer for you question and open up in this theory.</p>
      </div>
      <div className="video">
      <ReactPlayer url="https://www.youtube.com/watch?v=zSv0Y7qrzQM"controls />
      </div>
      
    
      </div>
    


  )
}


export default About;