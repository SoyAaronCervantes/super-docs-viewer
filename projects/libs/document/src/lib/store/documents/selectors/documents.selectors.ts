import { createSelector } from '@ngrx/store';
import {documentsFeature} from "../reducers/documents.reducer";

const {
  selectDocumentState
} = documentsFeature;

export const selectDocument =
  createSelector(selectDocumentState, value => value);
