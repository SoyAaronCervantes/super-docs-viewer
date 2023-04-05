import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAnnotation from '../reducers/annotation.reducer';
import {annotationFeature} from "../reducers/annotation.reducer";

const { selectPosition } = annotationFeature;

const createAnnotationSelector =
  createFeatureSelector<fromAnnotation.AnnotationState>(fromAnnotation.annotationFeatureKey);

export const selectCoordinates =
  createSelector( selectPosition, value => value );
