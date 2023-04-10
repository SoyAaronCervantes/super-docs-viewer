import { documentsReducer, documentInitialState } from './documents.reducer';

describe('Document Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = documentsReducer(documentInitialState, action);

      expect(result).toBe(documentInitialState);
    });
  });
});
