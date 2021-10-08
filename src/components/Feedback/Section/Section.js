import { Component } from 'react';

export default class Section extends Component {
  render() {
    return (
      <section>
        <h2>{this.props.title ? this.props.title : 'Please leave feedback'}</h2>
        {this.props.children}
      </section>
    );
  }
}
