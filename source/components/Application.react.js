import React from 'react'
var logs = require("../utilities/logsMixin.js");
const Section = require('./Section.react.js');
const Banner = require('./Banner.react.js');

const Application = React.createClass({
  name:"Application",
  mixins: [logs], //dont for get the comma

  //-----default API//
  render:function(){
    return(
      <div>
        <Banner />
        <Section>1</Section>
        <Section>2</Section>
        <Section>3</Section>
        <Section>4</Section>
      </div>);
  }
});
module.exports = Application;
// thing wanted to be made available
