import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export default class Feedback extends Component {
  state = this.props.state;

  handleGood = () => {
    this.setState(prevState => ({ Good: prevState.Good + 1 }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({ Neutral: prevState.Neutral + 1 }));
  };

  handleBad = () => {
    this.setState(prevState => ({ Bad: prevState.Bad + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.Good + this.state.Neutral + this.state.Bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.Good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        <FeedbackOptions />
        <Statistics
          good={this.handleGood}
          neutral={this.handleNeutral}
          bad={this.handleBad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
          state={this.state}
        />
      </>
    );
  }
}
