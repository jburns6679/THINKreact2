import React from 'react';

const userstyle ={
  fontWeight:'bold',
  color:'blue'
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
    <div style={datestyle}><span>{date}</span></div><br />
  </div>

);


export default tweet;
