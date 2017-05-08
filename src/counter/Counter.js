import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Counter.actions';

class Counter extends React.Component {
  render() {
    let count = this.props.count;
    let add = this.props.add;
    let subtract = this.props.subtract;
    return (
      <div>
        <button onClick={subtract}>-</button>
        {count}
        <button onClick={add}>+</button>
      </div>
    );
  }
}

const CounterContainer = ReactRedux.connect(
  state => ({
    count: state.theCount
  }),
  actions
)(Counter);

export default CounterContainer;
