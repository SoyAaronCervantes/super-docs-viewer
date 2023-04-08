import { annotationsReducer, initialState } from '../reducers/annotations.reducer';

describe('Annotations Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = annotationsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
