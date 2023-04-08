import { createFeatureSelector, createSelector } from '@ngrx/store';
import {annotationsFeature} from "../reducers/annotations.reducer";

const {
  selectCoordinates,
  selectAll,
  selectTotal
} = annotationsFeature;

export const getCoordinates =
  createSelector( selectCoordinates, value => value );

export const getAnnotations =
  createSelector( selectAll, value => value );

export const getAnnotationsTotal =
  createSelector( selectTotal, value => value );
