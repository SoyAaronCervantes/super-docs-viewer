import * as fromDocument from '../reducers/documents.reducer';
import { selectDocumentState } from './document.selectors';

describe('Document Selectors', () => {
  it('should select the feature state', () => {
    const result = selectDocumentState({
      [fromDocument.documentsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
