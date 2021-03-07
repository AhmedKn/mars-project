import React from "react"
import Pubnavbar from "./pubnavbar"
import "../css/travel.css"


class Travel extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div className="travel-section">
          <Pubnavbar />
          <div className="travel-sec-section">
              <h2>STARSHIP</h2>
              <p>Starship will be the world’s most powerful launch vehicle ever developed, with the ability to carry in excess of 100 metric tonnes to Earth orbit. Drawing on an extensive history of launch vehicle and engine development programs, SpaceX has been rapidly iterating on the design of Starship with orbital-flight targeted for 2020.</p>
          </div>
          <div className="travel-time">
            <h2>How long will it take to arrive ?</h2>
            <p>Travelling to mars is not that easy , we need 6 months to arrive Mars with very high speed.</p>
          </div>
        </div>
        )
    }
}

export default Travel;