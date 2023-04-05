import * as fromAnnotation from '../reducers/annotation.reducer';
import { selectAnnotationState } from './annotation.selectors';

describe('Annotation Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAnnotationState({
      [fromAnnotation.annotationFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
