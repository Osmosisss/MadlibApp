import React, { Component } from 'react';
import MadlibForm from './madlib_form';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="backgroundSkew">

          <div className="madlib-heading">
            <h1>Osmosis Madlib</h1>
            <div className="madlib-subheading">
            FIll out the fields below and click the generate button<br/>to see Mad Lib story.
            </div>
          </div>
          <MadlibForm />
        </div>
      </div>
    );
  }
}
