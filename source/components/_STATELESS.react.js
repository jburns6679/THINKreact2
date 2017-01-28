import React from 'react';

const userstyle ={
  color:'#333',
  fontStyle:'bold'
}

const style ={
  color:'#333'
}

const datestyle ={
  fontStyle:'italic'
}


const tweet = (date, text, user) => (

  <div>
    <div style={userstyle}><span>{user}</span></div>
    <div style={style}><span>{text}</span></div>
    <div style={datastyle}><span>{date}</span></div>
  </div>

);


export default <NAME>;
