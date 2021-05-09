import React, { Component } from 'react';
import Cats from './Cats';
 
const CatList = (props) => {
  console.log(props);
 return (
   <div>
   {props.breeds.map((cat,index) => {return(
     <li key= {index}>{cat}</li>
   )  } )}
   </div>
 )
}
 
 
export default CatList;
