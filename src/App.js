import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      tre: [],
      flag : true,
      sort: true };
      this.compareBy.bind(this);
      this.sortBy.bind(this);
}
   
compareBy(key) {
  return function (a, b) {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  };
}
compareByRev(key) {
  return function (a, b) {
    if (a[key] > b[key]) return -1;
    if (a[key] < b[key]) return 1;
    return 0;
  };
}

sortBy(key) {
  let arrayCopy = [...this.state.data];
  arrayCopy.sort(this.compareBy(key));
  this.setState({data: arrayCopy, sort: false});
} 

sortByRev(key) {
  let arrayCopy = [...this.state.data];
  arrayCopy.sort(this.compareByRev(key));
  this.setState({data: arrayCopy, sort: true});
} 

delta = () =>  {
fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
.then(res => res.json())
.then(data => this.setState({
  data: data,
  tre: [],
  flag:false
}));
}

fetchDetails = (e) => {
    this.setState({tre: e.currentTarget.attributes['data-value'].value, flag: false});
    console.log('We need to get the details for ', this.state.tre);
}

render() {
const flag = this.state.flag;
const sort = this.state.sort;
return( (flag)?
<div class="col-4"> <button class="col-12 btn btn-primary" onClick = {this.delta.bind(this) }>Показать</button> </div>:
  
<div class="col-6">  
    <table class="table table-striped table-bordered">
      <tbody>{this.state.data.map((item, i) => {
        return (                         
          <tr key={i} data-value={[
            item.address.streetAddress,
            item.address.city,
            item.address.state,
            item.address.zip,
            item.description]} onClick={(e) => this.fetchDetails(e)}> 
                <td onClick={()=>(sort)?this.sortBy('id'):this.sortByRev('id')}>{item.id}</td>
                <td onClick={()=>(sort)?this.sortBy('firstName'):this.sortByRev('firstName')}>{item.firstName}</td>
                <td onClick={()=>(sort)?this.sortBy('lastName'):this.sortByRev('lastName')}>{item.lastName}</td>
                <td onClick={()=>(sort)?this.sortBy('email'):this.sortByRev('email')}>{item.email}</td>
                <td>{item.phone}</td>                 
            </tr>)})}
        </tbody>
    </table>
  <hr></hr>
  <div class="col-12" id='mydiv'>{this.state.tre} </div>
</div>)}
}
export default App; 
