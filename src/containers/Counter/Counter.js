import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actiontypes';

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
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
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
    ctr: state.count.counter,
    storedResults: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(actionTypes.increase()),
    onDecreaseCounter: () => dispatch(actionTypes.decrease()),
    onIncrementFiveCounter: () => dispatch(actionTypes.increment_five(5)),
    onDecreaseFiveCounter: () => dispatch(actionTypes.decrease_five(5)),
    onStoreResult: (result) => dispatch(actionTypes.store_result(result)),
    onDeleteResult: (id) =>
      dispatch({ type: actionTypes.DELETE_RESULT, result_id: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
