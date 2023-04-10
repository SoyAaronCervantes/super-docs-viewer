import { createFeature, createReducer, on } from '@ngrx/store';
import * as DocumentActions from '../actions/documents.actions';
import {DocumentInterface} from "../../../interfaces";

export const documentsFeatureKey = 'document';

export interface DocumentsState extends DocumentInterface {}

export const documentInitialState: DocumentsState = {
  id: 0,
  title: '',
  storage: {
    url: ''
  }
};

export const documentsReducer = createReducer(
  documentInitialState,
  on(DocumentActions.storeDocument, (state, { document }) => ({
    ...state,
    id: document.id,
    title: document.title,
    storage: JSON.parse(JSON.stringify(document.storage))
  })),
);

export const documentsFeature = createFeature({
  name: documentsFeatureKey,
  reducer: documentsReducer
});
