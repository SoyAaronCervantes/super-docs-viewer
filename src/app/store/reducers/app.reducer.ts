import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import * as AnnotationFeature from '../annotation/reducers/annotation.reducer';
import * as DocumentFeature from '../document/reducers/document.reducer';

export interface State {
  [AnnotationFeature.annotationFeatureKey]: AnnotationFeature.AnnotationState;
  [DocumentFeature.documentFeatureKey]: DocumentFeature.DocumentState;
}

export const appReducer: ActionReducerMap<State> = {
  [AnnotationFeature.annotationFeatureKey]: AnnotationFeature.annotationReducer,
  [DocumentFeature.documentFeatureKey]: DocumentFeature.documentReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
