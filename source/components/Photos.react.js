const React = require('react');
const Row = require ('react-bootstrap/lib/Row');
const Col = require ('react-bootstrap/lib/Col');
var logs = require("../utilities/logsMixin.js")

var imageArray = ['./img/image1.jpg','./img/image2.jpg','./img/image3.jpg','./img/image4.jpg']

const imageStyle ={
  width:'80%'
}


const Photos = React.createClass({


name: "Photos",
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

    var photos;

    if (imageArray.length > 0) {
    photos = imageArray.map(function(val, idx) {





      return(
        <div key={idx}>
          <Col xs={6}><img style={imageStyle} src={val} /></Col>

        </div>
      )

    })
    }

    return (
      <Row>{photos}</Row>
    )
  }

  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}

});

module.exports = Photos
