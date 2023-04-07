import * as fromDocument from '../reducers/document.reducer';
import { selectDocumentState } from './document.selectors';

describe('Document Selectors', () => {
  it('should select the feature state', () => {
    const result = selectDocumentState({
      [fromDocument.documentFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
