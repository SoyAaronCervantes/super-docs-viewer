import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAnnotation from '../reducers/annotation.reducer';

const createAnnotationSelector =
  createFeatureSelector<fromAnnotation.AnnotationState>(fromAnnotation.annotationFeatureKey);

export const selectCoordinates = createSelector(
  createAnnotationSelector,
  (state) => state.position
);
