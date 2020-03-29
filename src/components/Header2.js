import React,{Component} from 'react';
import '../App.css';
import Login from './login.js';
import Home from './home.js';
import Register from './register.js';
import Main from './main.js';
import {BrowserRouter,Route,Link} from 'react-router-dom';
class Header extends Component{
   link= {
    color:'white'
  }
  state={
    login:"Logout",
    register:"Dashboard"
  }
  render(){
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
            <label className="title"><Link to="/"  style={this.link}>ITIOT Cloud</Link></label>
            <ul>
              <li ><Link to="/login"  className="list" >{this.state.login}</Link></li>
              <li><Link to="/register" className="list" >{this.state.register}</Link></li>
            </ul>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/main" component={Main}/>
            </BrowserRouter>
          </nav>
      </header>
      </html>
  );
  }
}

export default Header;
