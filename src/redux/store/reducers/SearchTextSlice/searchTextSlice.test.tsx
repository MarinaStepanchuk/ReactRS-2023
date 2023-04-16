import searchTextReducer, { searchTextSlice, initialState } from './searchTextSlice';

describe('searchTextSlice', () => {
  it('should return default state', () => {
    const result = searchTextReducer(undefined, { type: '' });

    expect(result).toEqual(initialState);
  });

  it('should save text with "saveText" action', () => {
    const action = { type: searchTextSlice.actions.saveText.type, payload: 'rs' };

    const result = searchTextReducer({ searchText: '123' }, action);

    expect(result.searchText).toBe('rs');
  });
});
