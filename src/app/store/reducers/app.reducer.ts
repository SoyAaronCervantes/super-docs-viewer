import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import * as AnnotationFeature from '../annotations/reducers/annotations.reducer';
import * as DocumentFeature from '../document/reducers/document.reducer';

export interface State {
  [AnnotationFeature.annotationsFeatureKey]: AnnotationFeature.AnnotationsState;
  [DocumentFeature.documentFeatureKey]: DocumentFeature.DocumentState;
}

export const appReducer: ActionReducerMap<State> = {
  [AnnotationFeature.annotationsFeatureKey]: AnnotationFeature.annotationsReducer,
  [DocumentFeature.documentFeatureKey]: DocumentFeature.documentReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
