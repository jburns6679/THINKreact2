const React = require('react');
const Row = require ('react-bootstrap/lib/Row');
const Col = require ('react-bootstrap/lib/Col');
import textBlock from "./textBlock.react.js"
import tweetsActions from "../actions/tweets.actions.js"
import TweetsStore from "../stores/Tweets.store.js"

var logs = require("../utilities/logsMixin.js")
const Tweets = React.createClass({


name: "Tweets",
  mixins: [logs], //dont forget the comma
  PropTypes:{
    children:React.PropTypes.node
  },

tweetsStoreChange:function(){
  console.log('5 - tweetsStoreChange');
  var newTweets = TweetsStore.getTweets()
  this.setState({
    tweetData:newTweets
  })
},

  //-----default API-------
  //getDefaultProps: function(){},

  getInitialState: function(){
    return({tweetData:[]})
  },

  //componentWillMount: function(){},
  componentDidMount: function(){
    TweetsStore.addChangeListener(this.tweetsStoreChange)
    tweetsActions.getNewTweets()
  },

  //componentWillReceiveProps: function(){},
  //shouldComponentUpdate: function(){},
  //componentWillUpdate: function(){},

  render: function() {

    var jsxTweets = this.state.tweetData.map(function(val,idx) {
      return <div key={idx}>{textBlock(val.date, val.text, val.user)}</div>
    })


    return (
      <div>
        {jsxTweets}
      </div>
  )

},
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}

});

module.exports = Tweets
