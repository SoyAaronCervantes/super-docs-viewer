import { createSelector } from '@ngrx/store';
import {documentFeature} from "../reducers/document.reducer";

const {
  selectDocumentState
} = documentFeature;

export const selectDocument =
  createSelector(selectDocumentState, value => value);
