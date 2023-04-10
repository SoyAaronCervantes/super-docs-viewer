import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import * as DocumentsStore from '@libs/document';

export interface State {
  [DocumentsStore.annotationsFeatureKey]: DocumentsStore.AnnotationsState;
  [DocumentsStore.documentsFeatureKey]: DocumentsStore.DocumentsState;
}

export const appReducer: ActionReducerMap<State> = {
  [DocumentsStore.annotationsFeatureKey]: DocumentsStore.annotationsReducer,
  [DocumentsStore.documentsFeatureKey]: DocumentsStore.documentsReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
