import React from 'react';
import '../App.css';
import Login from './login.js';
import Home from './home.js';
import Register from './register.js';
import Main from './main.js';
import {BrowserRouter,Route,Link} from 'react-router-dom';
const Header = ({sign}) => {
  let logged=[];
  const start = () => {
    if(sign==='Login')
    {

          logged=[
            {
              name:"Login",
              link:"/login"
            },
            {
              name:"Register",
              link:"/register"
            }
          ]
    }
    else{
      logged=[
        {
          name:"Logout",
          link:"/login"
        },
        {
          name:"Register",
          link:"/register"
        }
      ]
    }
  }
  const view = () => {
  return logged.map((logged) =>
    <li ><Link to={logged.link} className="list" >{logged.name}</Link></li>
  );
 }
  return (
    <html>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <header className="App-header">
          <nav>
          <BrowserRouter>
            <input type="checkbox" id="check"></input>
            <label for="check" className="menu">
               <i class="fa fa-bars"></i>
            </label>
            <label className="title"><Link to="/"  style={{color:"white"}}>ITIOT Cloud</Link></label>
            {start()}
            <ul>
            {view()}
            </ul>
            <Route exact path="/login" component={Login} render={()=><Login start={"start"}/>}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/main" component={Main}/>
            </BrowserRouter>
          </nav>
      </header>
      </html>
  );
}

export default Header;
