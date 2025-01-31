import { Button, Input, Text } from '@ui';
import { useReducer, type KeyboardEventHandler } from 'react';

interface State {
  value: number;
}

export enum ActionType {
  INCREMENT = 'action/increment', // 0
  DECREMENT = 'action/decrement', // 1
  SET = 'action/set', // 2
}

interface Action {
  type: ActionType;
  payload?: number;
}

const initialState: State = {
  value: 0,
};

// class Mieso extends Error {}

export const reducer = (state: State, action: Action) => {
  if (action.type === ActionType.DECREMENT) {
    return {
      value: state.value - 1,
    };
  } else if (action.type === ActionType.INCREMENT) {
    return {
      value: state.value + 1,
    };
  } else if (action.type === ActionType.SET && action.payload) {
    return {
      value: action.payload,
    };
  }
  return state;
  // throw new Error('Invalid action');
};

const increment = () => ({ type: ActionType.DECREMENT });

export const Stepper = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      dispatch({
        type: ActionType.SET,
        payload: parseInt(event.currentTarget.value, 10),
      });
    }
  };

  return (
    <div className="flex flex-col max-w-2xl mt-4">
      <div className="flex">
        <div className="w-1/3">
          <Button label="-" onClick={() => dispatch(increment())} />
        </div>
        <div className="w-1/3 flex justify-center">
          <Text>{state.value}</Text>
        </div>
        <div className="w-1/3 flex justify-end">
          <Button
            label="+"
            onClick={() => dispatch({ type: ActionType.INCREMENT })}
          />
        </div>
      </div>
      <div>
        <Input
          data-testid="my-custom-input"
          label=""
          type="number"
          onKeyDown={handleKeyDown}
        />
        {/* <p className="text-red-700">Error</p> */}
      </div>
    </div>
  );
};
