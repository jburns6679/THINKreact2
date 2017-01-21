const React = require('react');
var logs = require('../utilities/logsMixin.js')
const Row = require ('react-bootstrap/lib/Row');
const Col = require ('react-bootstrap/lib/Col');

const bannerStyle={
  backgroundColor:"#333",
  height:"400px",
  width:"100%"
}

const Banner = React.createClass({

name: "Banner",
mixins: [logs], //dont forget the comma
propTypes:{
  title:React.PropTypes.string,
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
      <Row style={bannerStyle}>

      </Row>
  )

},
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}

});

module.exports = Banner
