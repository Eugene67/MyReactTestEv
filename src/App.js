import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
       data: [],
      tre: [],
      flag: true
      };
   
}
   
   
   delta = () =>  {
    fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
    .then(res => res.json())
    .then(data => this.setState({
      data: data,
      tre: [],
    flag: true}));
   }

   fetchDetails = (e) => {
     
     this.setState({tre: e.currentTarget.attributes['data-value'].value, flag: false});
      
     console.log('We need to get the details for ', this.state.tre);
  
}

  
  render() {
    const flag = this.state.flag;
       return((flag)?
        
     <div>
       <button onClick = {this.delta.bind(this)}>+</button>
       
        <table>
      <tbody>{this.state.data.map((item, i) => {
              
              return (                         
                <tr key={i} data-value={[
                  item.address.streetAddress,
                  item.address.city,
                  item.address.state,
                  item.address.zip,
                  item.description]} onClick={(e) => this.fetchDetails(e)}> 
                      <td>{item.id}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td> 
                      
                      
                  </tr>)
                  
            })}</tbody>
       </table>
</div>:
<div>
       <button onClick = {this.delta.bind(this)}>+</button>
        <table>
      <tbody>{this.state.data.map((item, i) => {
              
              return (                         
                     <tr key={i} data-value={[
                       item.address.streetAddress,
                       item.address.city,
                       item.address.state,
                       item.address.zip,
                       item.description]} onClick={(e) => this.fetchDetails(e)}>    
                      <td>{item.id}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td> 
                      
                  </tr>)
                  
            })}</tbody>
       </table>
       <div>______________________________________________________</div>
      
         <div id='mydiv'>{this.state.tre} </div>
                            
      
</div>
        ) }
    } 
  
export default App;
