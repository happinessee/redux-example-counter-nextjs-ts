"use client"

import { Dispatch } from "redux";
import { RootState } from "../reducers";
import Counter, { CounterProps } from "./Counter";
import { connect } from "react-redux";
import { decrease, increase } from "../counterReducer";

const CounterContainer = ({ number, onIncrease, onDecrease }: CounterProps) => {
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

const mapStateToProps = (state: RootState) => ({
  number: state.counterReducer.number,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onIncrease: () => dispatch(increase()),
  onDecrease: () => dispatch(decrease()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
