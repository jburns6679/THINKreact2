const React = require('react');
var logs = require("../utilities/logsMixin.js")
const Row = require ('react-bootstrap/lib/Row');
const Col = require ('react-bootstrap/lib/Col');

const <NAME> = React.createClass({


name: "<NAME>",
  mixins: [logs], //dont forget the comma
  PropTypes:{
    children:React.PropTypes.node
  }

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
      <div>TEMPLATE</div>
  )

},
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}

});

module.exports = <NAME>
