import { Component } from 'react';

export default class FeedbackOptions extends Component {
  render() {
    const { good, neutral, bad } = this.props;
    return (
      <>
        <button onClick={good}>Good</button>
        <button onClick={neutral}>Neutral</button>
        <button onClick={bad}>Bad</button>
      </>
    );
  }
}
