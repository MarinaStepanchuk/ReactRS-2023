import { critique } from '../../../../mocks/critiqueMock';
import critiquesReducer, { critiquesSlice, initialState } from './critiquesSlice';

describe('critiquesSlice', () => {
  it('should return default state', () => {
    const result = critiquesReducer(undefined, { type: [] });

    expect(result).toEqual(initialState);
  });

  it('should change showSendMessage after "showMessage" action', () => {
    const action = { type: critiquesSlice.actions.showMessage.type };

    const result = critiquesReducer(initialState, action);

    expect(result.showSendMessage).toBeTruthy();
  });

  it('should critiques list after "sendCard" action', () => {
    const action = { type: critiquesSlice.actions.sendCard.type, payload: critique };

    const result = critiquesReducer(initialState, action);

    expect(result.cards[0]).toBe(critique);
    expect(result.showSendMessage).toBeFalsy();
  });
});
