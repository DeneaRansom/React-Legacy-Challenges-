import React from 'react';
import { Component } from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends React.Component {
  constructor(props) {
    super(props)
   this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
    searchResult: ''
    }
  }
 

 searchFunction (e) {
   this.setState({search: e.target.value})
 };

 render() {
   return(
     <div>
       <form>
       <Input type="text" value={this.state.search} onChange={(e => this.searchFunction(e))}
       placeholder='Search Here' />
       <button type="submit">Search</button>
       <h3>Results:</h3>
       <SearchDisplay things={this.state.things.filter(item => item.includes(this.state.search))} 
       searchResult={this.state.searchResult}/>
       </form>
     </div>
   )
 }
}


 class SearchDisplay extends Component {
   render() {
     return (
       <div>
         {this.props.things.map(item => {
           return <li>{item}</li>
         })}
       </div>
     )
   }
 }
 
export default SearchIndex;
