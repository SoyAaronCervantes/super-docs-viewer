import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDocument from '../reducers/document.reducer';

export const selectDocumentState = createFeatureSelector<fromDocument.DocumentState>(
  fromDocument.documentFeatureKey
);
