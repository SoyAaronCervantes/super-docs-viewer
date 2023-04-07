import { createSelector } from '@ngrx/store';
import {documentFeature} from "../reducers/document.reducer";

const {
  selectAnnotations,
  selectDocumentState
} = documentFeature;

export const selectDocument =
  createSelector(selectDocumentState, value => value);
export const selectAnnotationsFromDocument =
  createSelector(selectAnnotations, value => value);
