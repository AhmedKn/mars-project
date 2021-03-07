import React from "react"
import Scnavbar from "./scienavbar"
import "../css/forum.css"
import jwt_decode from 'jwt-decode'
import axios from "axios"


class Animals extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user : "",
            message:"",
            type:"Animals",
            date:Date().toLocaleString(),
            messages:[]
        }
    }
    componentDidMount(){
this.getMessage()
    }
    send=(data)=>{
        axios.post("http://localhost:5000/MarsP/user/scientists/",data)
        .then(() => this.setState({message:""}))
        .catch(err => console.error(err))
    }
    getMessage = ()=>{
        axios.get("http://localhost:5000/MarsP/user/scientists/")
        .then((res) => this.setState({messages: res.data}))
        .catch(err => console.error(err))
    }
    handleChange=(e)=>{this.setState({
        [e.target.name]:e.target.value
      })}
    render(){
        var token = localStorage.getItem('token')
        var decoded = jwt_decode(token)
        var today = new Date()
        return(
        <div className="forum-section">
          <Scnavbar />
          <div>
          <div className="comment-box">
                <textarea placeholder="Your comment..." name="message" value={this.state.message} onChange={(e) => this.handleChange(e)} autoComplete="off"/>
                <button onClick={() => this.send({newmessage:this.state.message,username:decoded.firstname,newtype:this.state.type,newdate:this.state.date,newacctype:decoded.acctype,newregion:decoded.region})}>send</button>
                  </div> 
              <div className="messages-section">
                  <h2>What about animals ?</h2>
                 <div className="messages-box">
                 {this.state.messages.map(x =>{
                      if (x.type === "Animals"){
                        return (
                            <div className="message">
                                <div className="message-upperbox">
                                   <p>{x.user}</p>
                                   <p className="message-date">{x.date}</p>
                                </div>
                                <div className="message-down">
                                    <div className="down-left-message">
                                       <p>Type: {x.acctypem}</p>
                                        <p>Region: {x.regionm}</p>
                                    </div>
                                    <div className="down-right-message">
                                       <p>{x.message}</p>
                                    </div>
                                </div>
                            </div>
                            )
                      }
                  })}
                 </div>
              </div>
          </div>
        </div>
        )
    }
}

export default Animals