import React, { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";

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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback;
     return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
  }

  render() {
    return (
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleOptions} />
        </Section>
        <Section title="Statistics">

        </Section>
      </div>
    );
  }
  
   
 
  
};
