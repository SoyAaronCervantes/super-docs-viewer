import { createFeature, createReducer, on } from '@ngrx/store';
import * as DocumentActions from '../actions/document.actions';
import {DocumentInterface} from "../../../interfaces/document.interface";

export const documentFeatureKey = 'document';

export interface DocumentState extends DocumentInterface {}

export const initialState: DocumentState = {
  id: 0,
  title: '',
  storage: {
    url: ''
  }
};

export const documentReducer = createReducer(
  initialState,
  on(DocumentActions.storeDocument, (state, { document }) => ({
    ...state,
    id: document.id,
    title: document.title,
    storage: JSON.parse(JSON.stringify(document.storage))
  })),
);

export const documentFeature = createFeature({
  name: documentFeatureKey,
  reducer: documentReducer
});
