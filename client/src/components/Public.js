import React from "react"
import "../css/public.css"
import jwt_decode from 'jwt-decode'
import Pubnavbar from "./pubnavbar"

class Public extends React.Component {
constructor(props){
    super(props)
    this.state = {
        user:"",
        message:""
    }
}

render(){
    var token = localStorage.getItem('token')
    var decoded = jwt_decode(token)
    return(
    <div className="public-section">
     <Pubnavbar />
     <div className="welcome-pub-section">
        <p className="welcomer-p">Welcome to our platform !</p>
     </div>
     <div className="pub-par-section">
        <p>MeetMars is Great platform to interact and communicate with scientists and innovative from the worls wide about Mars planet and know more about it all you have to do is entering to our <a href={`/user/forumpub/${decoded.id}`}>forum</a> and send your question. we believe that we can save humanity and every alive creatures. </p>
        <p>Also you can checkout the <a href={`/user/travels/${decoded.id}`}>Travels</a> for mars.</p>
     </div>
    </div>
    )
}
}

export default Public


