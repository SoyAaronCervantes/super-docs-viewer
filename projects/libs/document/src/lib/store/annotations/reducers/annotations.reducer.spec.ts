import { annotationsReducer, annotationsInitialState } from '../reducers/annotations.reducer';

describe('Annotations Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = annotationsReducer(annotationsInitialState, action);

      expect(result).toBe(annotationsInitialState);
    });
  });
});
