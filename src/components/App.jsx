import React, { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";


export class App extends Component {


  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOptions = event => {
    this.setState(prevState => ({
      [event]: prevState[event] + 1,
    }));
  };

  render() {
    return (
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleOptions} />
        </Section>
      </div>
    );
  }
  
   
 
  
};
