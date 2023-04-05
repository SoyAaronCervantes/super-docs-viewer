import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import * as AnnotationFeature from '../annotation/reducers/annotation.reducer';

export interface State {
  [AnnotationFeature.annotationFeatureKey]: AnnotationFeature.AnnotationState;
}

export const appReducer: ActionReducerMap<State> = {
  [AnnotationFeature.annotationFeatureKey]: AnnotationFeature.annotationReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
