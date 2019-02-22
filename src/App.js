import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    const tre = true;
    this.state = {
       data: [],
      tre: 'r',
       flag: true};
   
}
   
   
   delta = () =>  {
    fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
    .then(res => res.json())
    .then(data => this.setState({
      data: data,
      tre: 'r'}));
   }

   fetchDetails = (e) => {
     this.setState({tre: e.target , flag: false});
     

    
    // console.log('We need to get the details for ', data);
  
}
  
  render() {
    const flag = this.state.flag;
       return((flag)?
        
     <div>
       <button onClick = {this.delta.bind(this)}>+</button>
        <table>
      <tbody>{this.state.data.map((item, i) => {
              
              return (                         
                     <tr key = {i} >    
                      <td onClick={(e) => this.fetchDetails(e)}>{item.id}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                  </tr>)
                  
            })}</tbody>
       </table>

      </div>: <div>Здесь будут данные строки</div> )
      
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
