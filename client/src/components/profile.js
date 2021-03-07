import React from "react"
import "../css/profile.css"
import Scnavbar from "./scienavbar"
import jwt_decode from 'jwt-decode'


class Profile extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        var token = localStorage.getItem('token')
        var decoded = jwt_decode(token)
        return(
            <div className="Profile-section">
               <Scnavbar />
               <div className="profile-box">
                   <h2>Account Information</h2>
                   <div className="profile-info">
                       <p>Id: {decoded.id}</p>
                       <p>Firstname: {decoded.firstname}</p> 
                       <p>Lastname: {decoded.lastname}</p>
                       <p>Email: {decoded.email}</p>
                       <p>Region: {decoded.region}</p>
                   </div>
               </div>
            </div>
        )
    }
}

export default Profile