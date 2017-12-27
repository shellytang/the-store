import React, { Component} from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.qty
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(e) {
    e.preventDefault()
    this.setState((prevState) => ({
      count: prevState.count + 1
    }), () => this.props.handleChange(this.state.count));
  }

  decrement(e) {
    e.preventDefault();
    if(this.state.count === 1) {
      return this.state.count;
    }
    this.setState((prevState) => ({
      count: this.state.count - 1
    }), () => this.props.handleChange(this.state.count));
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
