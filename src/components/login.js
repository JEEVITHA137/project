import React,{Component} from 'react';
import './login.css';
class login extends Component{
  state={
    namel:"",
    NamelError:"",
    passl:"",
    PasslError:""
  };
  NamelChange = (event) => {
    this.setState({
      namel:event.target.value
    })
  }
  PasslChange = (event) => {
    this.setState({
      passl:event.target.value
    })
  }
  submit = ()=> {
    let error = 0;
    if(this.state.namel==="")
    {
      error=1;
      this.setState({
      NamelError:"Must Enter Inputs"
      })
    }
    if(this.state.passl==="")
    {
      error=1;
      this.setState({
      PasslError:"Must Enter Inputs"
      })
    }
    if(error===0)
    {
        this.props.history.push('./main');
        error=2;
        console.log(props.start);

    }
  }
  render(){
     return(
       <div>
       <form>
         <label className="head">Login</label><br/>
         <label>UserID:</label><input type="text" value={this.state.namel} onChange={this.NamelChange}/><br/><span>{this.state.NamelError}</span><br/>
         <label>Password:</label><input type="password" value={this.state.passl} onChange={this.PasslChange}/><br/><span>{this.state.PasslError}</span><br/>
         <input className="sum" type="submit" onClick={this.submit} value="Submit"/>
       </form>
       </div>
     );
   }
}
export default login;
