import { createAction, props } from '@ngrx/store';
import {Point} from "@angular/cdk/drag-drop";
import {Annotation} from "../../../interfaces/annotation.interface";

export const updateCoords = createAction(
  '[Annotation] Update Coords',
  props<{ coordinates: Point }>()
);

export const deleteAnnotation = createAction(
  '[Annotation] Delete Annotation',
  props<{ annotation: Annotation, documentId: string }>()
);

export const annotationDeleted = createAction('[Annotation] Annotations Deleted');

export const AnnotationsFailure = createAction(
  '[Annotation] Annotations Failure',
  props<{ error: any }>()
);
