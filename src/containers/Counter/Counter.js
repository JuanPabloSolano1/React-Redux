import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecreaseCounter}
        />
        <CounterControl
          label="Add 5"
          clicked={this.props.onIncrementFiveCounter}
        />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onDecreaseFiveCounter}
        />
        <hr></hr>
        <button onClick={this.props.onStoreResult}>Store Result</button>
        <ul>
          {this.props.storedResults.map((storeResult) => {
            return (
              <li
                key={storeResult.id}
                onClick={() => this.props.onDeleteResult(storeResult.id)}
              >
                {storeResult.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    storedResults: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
    onDecreaseCounter: () => dispatch({ type: 'DECREASE' }),
    onIncrementFiveCounter: () =>
      dispatch({ type: 'INCREMENT_FIVE', value: 5 }),
    onDecreaseFiveCounter: () => dispatch({ type: 'DECREASE_FIVE', value: 5 }),
    onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
    onDeleteResult: (id) => dispatch({ type: 'DELETE_RESULT', result_id: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
