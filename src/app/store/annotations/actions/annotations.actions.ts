import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import {Annotation, NewAnnotation} from "../../../interfaces/annotation.interface";
import {Point} from "@angular/cdk/drag-drop";

export const setAnnotations = createAction(
  '[Annotation/API] Set Annotations',
  props<{ annotations: Annotation[] }>()
);

export const addedAnnotation = createAction(
  '[Annotation/API] Added Annotation',
  props<{ annotation: Annotation }>()
);

export const upsertedAnnotation = createAction(
  '[Annotation/API] Upserted Annotation',
  props<{ annotation: Annotation }>()
);

export const addedAnnotations = createAction(
  '[Annotation/API] Added Annotations',
  props<{ annotations: Annotation[] }>()
);

export const upsertedAnnotations = createAction(
  '[Annotation/API] Upserted Annotations',
  props<{ annotations: Annotation[] }>()
);

export const updatedAnnotation = createAction(
  '[Annotation/API] Updated Annotation',
  props<{ annotation: Update<Annotation> }>()
);

export const updatedAnnotations = createAction(
  '[Annotation/API] Updated Annotations',
  props<{ annotations: Update<Annotation>[] }>()
);
export const deletedAnnotation = createAction(
  '[Annotation/API] Deleted Annotation',
  props<{ id: string }>()
);

export const deletedAnnotations = createAction(
  '[Annotation/API] Delete Annotations',
  props<{ ids: string[] }>()
);

export const clearedAnnotations = createAction(
  '[Annotation/API] Cleared Annotations'
);

export const setCoords = createAction(
  '[Annotation] Set Coords',
  props<{ coordinates: Point }>()
);

export const annotationFailure = createAction(
  '[Annotation/API] Annotation Failure',
  props<{ error: any }>()
);

export const addAnnotation = createAction(
  '[Annotation/API] Add Annotation',
  props<{annotation: NewAnnotation, documentId: string, formData?: FormData}>()
);

export const deleteAnnotation = createAction(
  '[Annotation/API] Delete Annotation',
  props<{ annotation: Annotation, documentId: string }>()
);
