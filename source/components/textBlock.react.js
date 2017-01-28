import React from 'react';

const style ={
  color:'#333'
}

const datestyle ={
  fontStyle:'italic'
}


const tweet = (date, text, user) => (

  <div>
    <span>{user}</span>
    <div style={style}><span>{text}</span></div>
    <div datestyle={style}><span>{date}</span></div>
  </div>

);


export default tweet;
