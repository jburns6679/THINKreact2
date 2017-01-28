const React = require('react');
const Row = require ('react-bootstrap/lib/Row');
const Col = require ('react-bootstrap/lib/Col');
import textBlock from "./textBlock.react.js"

var logs = require("../utilities/logsMixin.js")
const Tweets = React.createClass({


name: "Tweets",
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
      <div>
      {textBlock("today","some text", "@jburns")}
    </div>
  )

},
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}

});

module.exports = Tweets
