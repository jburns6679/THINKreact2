import React from 'react'
var logs = require("../utilities/logsMixin.js");
const Section = require('./Section.react.js');
const Banner = require('./Banner.react.js');
const Header = require('./Header.react.js');
const Overview = require('./Overview.react.js');
const Bullets = require('./Bullets.react.js');

const Application = React.createClass({
  name:"Application",
  mixins: [logs], //dont for get the comma

  //-----default API//
  render:function(){
    return(
      <div>
        <Banner />
        <Section>
          <Header>Overview</Header>
          <Overview />
        </Section>
        <Section>
          <Header>Bullets</Header>
          <Bullets />
        </Section>
        <Section><Header>Photos</Header></Section>
        <Section><Header>Tweets</Header></Section>
      </div>);
  }
});
module.exports = Application;
// thing wanted to be made available
