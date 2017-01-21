const React = require('react');
var logs = require("../utilities/logsMixin.js")
const Row = require ('react-bootstrap/lib/Row');
const Col = require ('react-bootstrap/lib/Col');

const headerStyle ={
  color:"blue"
}

const Header = React.createClass({

name: "Header",
  mixins: [logs], //dont forget the comma
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
      <h2 style={headerStyle}>
        {this.props.children}
      </h2>
  )

},
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}

});

module.exports = Header
