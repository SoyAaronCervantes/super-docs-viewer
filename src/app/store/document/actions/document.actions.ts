import { createAction, props } from '@ngrx/store';
import {DocumentInterface} from "../../../interfaces/document.interface";

export const getDocument = createAction(
  '[Document/Firebase] Get Document',
  props<{ id: string }>()
);

export const storeDocument = createAction(
  '[Document/Firebase] Store Document and Annotations',
  props<{ document: DocumentInterface }>()
);

export const documentDocumentsFailure = createAction(
  '[Document/Firebase] Failed to get document and annotations',
  props<{ error: any }>()
);
