const React = require('react');
var logs = require('../utilities/logsMixin.js')
const Section = React.createClass({

  name: "Section",
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
      <div>SECTION {this.props.children}</div>
  )

},
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}

});

module.exports = Section
