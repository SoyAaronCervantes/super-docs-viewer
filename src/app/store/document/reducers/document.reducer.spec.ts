import { documentReducer, initialState } from './document.reducer';

describe('Document Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = documentReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
