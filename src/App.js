import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      tre: 1 };
      
}
   
   
   delta = () =>  {
    fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
    .then(res => res.json())
    .then(data => this.setState({data: data}));
   }
   fetchDetails = (e) => {
    this.setState({tre: e.target.getAttribute('id')});
    // console.log('We need to get the details for ', data);
  
}
  
  render() {
    return (
      <div>
      <button onClick={this.delta.bind(this)}>+</button>
      {/* <div>{JSON.stringify(this.state.data)}</div>  */}
      <table>
      <tbody>{this.state.data.map(function(item, key)  {
             
            return (
                                      /*Здесь не работает обработчик onClick={() => this.fetchDetails.bind(item.id)}*/
                     <tr key = {key}>    
                      <td>{item.id}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                  </tr>
                 )
             
             })}</tbody>
       </table>
      </div>
      );
    } 
      
  }
    //  const elements = document.getElementsByClassName("root");

    //   for (var i = 0; i < elements.length; i++) {
    //     const feed = elements[i].getAttribute("feed");
    //     this.render(<App key={i} feed={feed} />, elements[i]);







// }
// render() {
    
        
//   return (

// );
// }

export default App;
