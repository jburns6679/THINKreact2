const React = require('react');
const Row = require ('react-bootstrap/lib/Row');
const Col = require ('react-bootstrap/lib/Col');
var logs = require("../utilities/logsMixin.js")


const style ={
  color:"grey"
}

const text ="Aliquam erat volutpat. Sed at ante volutpat, lobortis risus vel, consectetur nisl. Phasellus bibendum nisl sed leo lacinia efficitur."

const Overview = React.createClass({

name: "Overview",
//  mixins: [logs], //dont forget the comma
  PropTypes:{
    children:React.PropTypes.node
  },

  //-----default API-------
  //getDefaultProps: function(){},
  //getInitialState: function(){},
  //componentWillMount: function(){},
  //componentDidMount: function(){},
  //componentWillReceiveProps: function(){},
  //shouldComponentUpdate: function(){},
  //componentWillUpdate: function(){},

  render: function() {
    return (
      <p style={style}>
        {text}
        {this.props.children}
      </p>
  )

},
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}

});

module.exports = Overview
