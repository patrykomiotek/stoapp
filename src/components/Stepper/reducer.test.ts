import { ActionType, reducer } from './Stepper';

describe('Stepper reducer', () => {
  it('should calculate values', () => {
    const state = { value: 55 };
    const incResult = reducer(state, { type: ActionType.INCREMENT });
    expect(incResult.value).toEqual(56);

    const setResult = reducer(state, { type: ActionType.SET, payload: 123 });
    expect(setResult.value).toEqual(123);
  });
});
