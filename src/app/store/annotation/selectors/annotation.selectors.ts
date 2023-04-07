import { createSelector } from '@ngrx/store';
import {annotationFeature} from "../reducers/annotation.reducer";

const { selectPosition } = annotationFeature;

export const selectCoordinates =
  createSelector( selectPosition, value => value );
