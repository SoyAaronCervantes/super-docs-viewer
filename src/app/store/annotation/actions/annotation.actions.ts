import { createAction, props } from '@ngrx/store';
import {Point} from "@angular/cdk/drag-drop";

export const updateCoords = createAction(
  '[Annotation] Update Coords',
  props<{ coordinates: Point }>()
);

export const AnnotationsSuccess = createAction(
  '[Annotation] Annotations Success',
  props<{ data: any }>()
);

export const AnnotationsFailure = createAction(
  '[Annotation] Annotations Failure',
  props<{ error: any }>()
);
