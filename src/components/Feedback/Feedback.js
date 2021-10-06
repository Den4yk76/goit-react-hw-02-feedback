import { Component } from 'react';

export default class Feedback extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => ({ Good: prevState.Good + 1 }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({ Neutral: prevState.Neutral + 1 }));
  };

  handleBad = () => {
    this.setState(prevState => ({ Bad: prevState.Bad + 1 }));
  };

  render() {
    const { Good } = this.state;
    const { Neutral } = this.state;
    const { Bad } = this.state;
    return (
      <section>
        <h2>Please leave feedback</h2>
        <button onClick={this.handleGood}>Good</button>
        <button onClick={this.handleNeutral}>Neutral</button>
        <button onClick={this.handleBad}>Bad</button>
        <ul>
          <h3>Statistics</h3>
          <li>Good: {Good}</li>
          <li>Neutral: {Neutral}</li>
          <li>Bad: {Bad}</li>
        </ul>
      </section>
    );
  }
}