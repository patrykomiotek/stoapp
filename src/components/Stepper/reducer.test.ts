import { ActionType, reducer } from './Stepper';

describe('Stepper reducer', () => {
  it('should calculate values', () => {
    const state = { value: 55 };
    const incResult = reducer(state, { type: ActionType.INCREMENT });
    expect(incResult.value).toEqual(56);
  });
});
