import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({
      type: 'Increment'
    });
  };

  incrementByFive = () => {
    this.props.dispatch({
      type: 'IncrementByFive'
    });
  };

  decrement = () => {
    this.props.dispatch({
      type: 'Decrement'
    });
  };

  decrementByTen = () => {
    this.props.dispatch({
      type: 'DecrementByTen'
    });
  };

  reset = () => {
    this.props.dispatch({
      type: 'Reset'
    });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <span>{this.props.count}</span>
          <br />
          <button onClick={this.increment}>Increase By 1</button>
          <br />
          <button onClick={this.incrementByFive}>Increase By 5</button>
          <br />
          <button onClick={this.decrement}>Decrease By 1</button>
          <br />
          <button onClick={this.decrementByTen}>Decrease By 10</button>
          <br />
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);