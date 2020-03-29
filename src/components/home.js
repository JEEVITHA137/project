import React,{Component} from 'react';
import '../App.css';
import bg from '../bg.jpeg';
class Home extends Component{
  render(){
     return(
       <div>
       <section><img src={bg} alt="Welcome"></img></section>
       </div>
     );
   }
}
export default Home;
