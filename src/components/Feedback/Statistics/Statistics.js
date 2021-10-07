import { Component } from 'react';

export default class Statistics extends Component {
  render() {
    const { Good } = this.props.state;
    const { Neutral } = this.props.state;
    const { Bad } = this.props.state;

    return (
      <section>
        <h2>Please leave feedback</h2>

        <ul>
          <h3>Statistics</h3>
          <li>Good: {Good}</li>
          <li>Neutral: {Neutral}</li>
          <li>Bad: {Bad}</li>
          <li>Total: {this.props.total()}</li>
          <li>
            Positive feedback:{' '}
            {this.props.positivePercentage()
              ? this.props.positivePercentage()
              : 0}
            %
          </li>
        </ul>
      </section>
    );
  }
}
