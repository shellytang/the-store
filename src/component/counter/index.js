import React, { Component} from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    }, () => this.props.handleChange(this.state.count));
  }

  decrement() {
    if(this.state.count === 1) {
      return this.state.count;
    }
    this.setState({
      count: this.state.count - 1
    }, () => this.props.handleChange(this.state.count));
  }

  render() {

    return (
      <div>
        <h2>This is the counter component</h2>
        <button onClick={this.decrement}>-</button>
        {this.state.count}
      <button onClick={this.increment}>+</button>
      </div>

    );

  }
}

export default Counter;