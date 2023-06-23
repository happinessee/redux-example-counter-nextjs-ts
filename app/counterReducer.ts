// 액션 타입을 정의한다.
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;

// 액션 생성 함수를 만든다.
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초기 상태를 정의한다.
const initialState = {
  number: 0,
};

type CounterActionType =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>;

// 리듀서 함수를 만든다.
function counter(state = initialState, action: CounterActionType) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
