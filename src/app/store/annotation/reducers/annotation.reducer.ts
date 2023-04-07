import { createFeature, createReducer, on } from '@ngrx/store';
import * as AnnotationActions from '../actions/annotation.actions';
import {Annotation} from "../../../interfaces/annotations.interface";

export const annotationFeatureKey = 'annotation';

export interface AnnotationState extends Annotation {}

export const initialState: AnnotationState = {
  image: null,
  position: {x: 0, y: 0},
  title: '',
  description: null,
  id: null
};

export const annotationReducer = createReducer(
  initialState,
  on(AnnotationActions.updateCoords, (state, { coordinates }) => ({
    ...state,
    position: {...coordinates}
  })),
);

export const annotationFeature = createFeature({
  name: annotationFeatureKey,
  reducer: annotationReducer
});

