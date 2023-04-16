import modalReducer, { modalSlice, initialState } from './modalSlice';

describe('modalSlice', () => {
  it('should return default state', () => {
    const result = modalReducer(undefined, { type: '' });

    expect(result).toEqual(initialState);
  });

  it('should save the correct id after "showMessage" action', () => {
    const action = { type: modalSlice.actions.showModal.type, payload: '1' };

    const result = modalReducer({ idCard: '' }, action);

    expect(result.idCard).toBe('1');
  });

  it('should closing modal and removing id after "showMessage" action', () => {
    const action = { type: modalSlice.actions.closeModal.type };

    const result = modalReducer({ idCard: '12' }, action);

    expect(result.idCard).toBe('');
  });
});
