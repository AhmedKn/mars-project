import React from "react"
import "../css/public.css"
import jwt_decode from 'jwt-decode'
import Scnavbar from "./scienavbar"
import "../css/scientist.css"
import Forum from "./forum"


class Scientist extends React.Component {
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
    <div className="scientist-section">
     <Scnavbar />
     <div className="scientist-body">
         <p className="sc-1">Hello Scientist !</p>
         <p className="sc-2">Welcome to Mars Platform</p>
         <p className="sc-3">Help us Solving Mars Problems</p>
         <p className="sc-4">For new Life and new Begginig</p>
     </div>
    </div>
    )
}
}

export default Scientist