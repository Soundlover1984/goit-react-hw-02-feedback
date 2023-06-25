import React, { Component } from "react";
import { Section } from "./Section/Section";


export class App extends Component {


  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div className="container">
        <Section title="Please leave feedback">
        </Section>
      </div>
    );
  }
  
   
 
  
};
