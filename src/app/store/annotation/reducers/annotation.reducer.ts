import { createFeature, createReducer, on } from '@ngrx/store';
import * as AnnotationActions from '../actions/annotation.actions';
import {Annotation} from "../../../interfaces/annotation.interface";

export const annotationFeatureKey = 'annotation';

export interface AnnotationState extends Annotation {}

export const initialState: AnnotationState = {
  image: '',
  position: {x: 0, y: 0},
  title: '',
  description: '',
  id: ''
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

