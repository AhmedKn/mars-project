import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Faq from './components/Faq';
import Signup from './components/Signup';
import Login from "./components/Login"
import Logged from './components/logged';
import Forum from "./components/forum"
import Co from "./components/co"
import Water from "./components/water"
import Animals from "./components/animals"
import Comars from "./components/comars"
import Profile from "./components/profile"
import Forumpub from "./components/forumpub"
import Profilepub from "./components/pubprofile"
import Travel from "./components/travels"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/faq" component={Faq} />
      <Route exact path="/Signup" component={Signup} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/user" component={Logged} />
      <Route exact path="/user/forum/:id" component={Forum} />
      <Route exact path="/user/co2-section/:id" component={Co} />
      <Route exact path="/user/water/:id" component={Water} />
      <Route exact path="/user/animals/:id" component={Animals} />
      <Route exact path="/user/comars/:id" component={Comars} />
      <Route exact path="/user/profile/:id" component={Profile} />
      <Route exact path="/user/forumpub/:id" component={Forumpub} />
      <Route exact path="/user/profilepub/:id" component={Profilepub} />
      <Route exact path="/user/travels/:id" component={Travel} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
