import { Component } from 'react';
import Feedback from './Feedback/Feedback';

export default class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };
  render() {
    return (
      <div>
        <Feedback state={this.state} />
      </div>
    );
  }
}
