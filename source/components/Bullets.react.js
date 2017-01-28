const React = require('react');
const Row = require ('react-bootstrap/lib/Row');
const Col = require ('react-bootstrap/lib/Col');
var logs = require("../utilities/logsMixin.js")

var bulletsArray = ["Graphic Design","Web Design","Custom Sculpted Cakes","Event Planning"]

const Bullets = React.createClass({


name: "Bullets",
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

    var bull;

    if (bulletsArray.length > 0) {
    bull = bulletsArray.map(function(val, idx) {

      return(
        <Row key={idx}>
          <Col xs={12}> - {val}</Col>
        </Row>
      )

    })
  }

    return (
      <div>{bull}</div>
  )

},
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}

});

module.exports = Bullets
