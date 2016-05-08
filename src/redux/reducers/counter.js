import { INCREMENT, DECREMENT, RESET } from 'actions/counter';

export const initialState = {
  value: 0,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      return Object.assign({}, state, {
        value: state.value + 1,
      });
    }

    case DECREMENT: {
      return Object.assign({}, state, {
        value: state.value - 1,
      });
    }

    case RESET: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}
