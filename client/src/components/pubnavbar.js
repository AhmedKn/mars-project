import React from "react"
import { Link, Redirect } from 'react-router-dom';
import "../css/scienavbar.css"
import jwt_decode from 'jwt-decode'
import Forum from "./forum"


class Pubnavbar extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        var token = localStorage.getItem('token')
    var decoded = jwt_decode(token)
        return(
            <nav className="navbar navbar-expand-lg cust-nav-bg">
            <div className="container">
            <Link onClick={() => localStorage.clear()} to="/" className="navbar-brand nav-title-sc">MarsMeet</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0 d-flex">
                <li className="nav-item">
             <Link to={`/user/`} className="nav-link link-sc-nav">Home</Link>
            </li>
                <li className="nav-item">
             <Link to={`/user/forumpub/${decoded.id}`} className="nav-link link-sc-nav">Forum</Link>
            </li>
            <li className="nav-item">
             <Link to={`/user/travels/${decoded.id}`} className="nav-link link-sc-nav">Travels</Link>
            </li>
            <li class="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {decoded.firstname}
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link class="dropdown-item" to={`/user/profilepub/${decoded.id}`}>Profile</Link></li>
            <li><a onClick={() => localStorage.clear()} class="dropdown-item" href="/login">Sign out</a></li>
          </ul>
        </li>
                </ul>
              </div>
            </div>
          </nav>
        )
    }
}

export default Pubnavbar;