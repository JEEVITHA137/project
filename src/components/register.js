import React, { Component } from "react";
import './login.css';
class register extends Component{
  state={
    name:"",
    nameError:"",
    id:"",
    idError:"",
    pass:"",
    PassError:"",
    dep:"",
    DepError:"",
    year:"",
    YearError:"",
    key:"",
    KeyError:""
  };
  NameChange = (event) => {
    let alph=/^[a-zA-Z]+$/
    this.setState({
      name:event.target.value
    })
    if(this.state.name.length<5)
    {
      this.setState({
      NameError:"Username needs to be atleast 5 characters long"
      })
    }
    else if(!(alph.test(this.state.name))){
      this.setState({
      NameError:"Must be an alphabetics only"
      })
    }
    else{
      this.setState({
      NameError:""
      })
      }
    }
  IdChange = (event) => {
    this.setState({
      id:event.target.value
    })
    if(this.state.id.length<5)
    {
      this.setState({
      idError:"Id needs to be atleast 5 characters long"
      })
    }
    else {
      this.setState({
      idError:""
      })
    }
  }
  PassChange = (event) => {
    let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/
    this.setState({
      pass:event.target.value
    })
    if(!(passRegex.test(this.state.pass))){
      this.setState({
        PassError:" Atleast 8 letters have one Alphanumerics & Special Characters "
      })
    }
    else {
      this.setState({
         PassError:""
      })
    }
  }
  DepChange = (event) => {
    let alph=/^[a-zA-Z]+$/
    this.setState({
      dep:event.target.value
    })
    if(!(alph.test(this.state.dep))){
      this.setState({
      DepError:"Must be an alphabetics only"
      })
    }
    else{
      this.setState({
       DepError:""
      })
      }
  }
  YearChange = (event) => {
    this.setState({
      year:event.target.value
    })
  }
  KeyChange = (event) => {
    this.setState({
      key:event.target.value
    })
  }
  submit = () => {
    let error = 0;
    if(this.state.name==="")
    {
      error=1;
      this.setState({
      NameError:"Must Enter Inputs"
      })
    }
    if(this.state.id==="")
    {
      error=1;
      this.setState({
      idError:"Must Enter Inputs"
      })
    }
    if(this.state.pass==="")
    {
      error=1;
      this.setState({
      PassError:"Must Enter Inputs"
      })
    }
    if(this.state.dep==="")
    {
      error=1;
      this.setState({
      DepError:"Must Enter Inputs"
      })
    }
    if(this.state.year==="")
    {
      error=1;
      this.setState({
      YearError:"Must Enter Inputs"
      })
    }
    if(this.state.key==="")
    {
      error=1;
      this.setState({
      KeyError:"Must Enter Inputs"
      })
    }
    if(error===0)
    {
        this.props.history.push('./main');
        error=2;
    }
  }
  render(){
     return(
       <div>
       <form>
         <label className="head">Register</label><br/>
         <label>Name:</label><input type="text" value={this.state.name} onChange={this.NameChange}/><br/><span>{this.state.NameError}</span><br/>
         <label>User-Id:</label><input value={this.state.id} type="text" onChange={this.IdChange}/><br/><span>{this.state.idError}</span><br/>
         <label>Password:</label><input value={this.state.pass} type="password" onChange={this.PassChange}/><br/><span>{this.state.PassError}</span><br/>
         <label>Department:</label><input value={this.state.dep} type="text" onChange={this.DepChange}/><br/><span>{this.state.DepError}</span><br/>
         <label>Year:</label><input value={this.state.year} type="text" onChange={this.YearChange}/><br/><span>{this.state.YearError}</span><br/>
         <label>Key:</label><input value={this.state.key} type="text" onChange={this.KeyChange}/><br/><span>{this.state.KeyError}</span><br/>
         <input className="sum" type="submit" onClick={this.submit} value="Submit"/>
       </form>
       </div>
     );
   }
}
export default register;
