import React, { Component } from 'react';
import Section from './components/Section';
import Statistics from './components/Statistics';



import './App.css';
import FeedbackOptions from './components/FeedbackOptions';




class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

onBtnCLick = (name) => () => {
    this.setState(prev => ({
      [name]: prev[name] + 1,
    }))
  };
  


  render() {
const { good, neutral, bad } = this.state;
    const positivePercentage = Math.round(good / (good + neutral + bad) * 100);
    const total = good + neutral + bad;
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions onGood={this.onBtnCLick('good')}
            onNeutral={this.onBtnCLick('neutral')}
            onBad={this.onBtnCLick('bad')} />
        </ Section >
        <Section title={'Statistics'}>
          {total>0? <Statistics good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          /> : <h3>not given feedback</h3>}
        </ Section  >
      </>
    );
  }
};


export default App;
