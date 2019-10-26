import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, inputValue, inputValueChange } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter count={this.props.count} clicks={this.props.clicks} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} onInputValue={this.props.onInputValue}  onInputValueChange={this.props.onInputValueChange} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onInputValue: () => dispatch(inputValue()),
    onInputValueChange: (number) => dispatch(inputValueChange(number))
    
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      clicks: state.clicks,
      valueInput: state.valueInput
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);