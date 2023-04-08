import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import {Annotation, NewAnnotation} from "../../../interfaces/annotation.interface";
import {Point} from "@angular/cdk/drag-drop";

export const setAnnotations = createAction(
  '[Annotation/API] Set Annotations',
  props<{ annotations: Annotation[] }>()
);

export const addedAnnotation = createAction(
  '[Annotation/API] Add Annotation',
  props<{ annotation: Annotation }>()
);

export const upsertAnnotation = createAction(
  '[Annotation/API] Upsert Annotation',
  props<{ annotation: Annotation }>()
);

export const addedAnnotations = createAction(
  '[Annotation/API] Add Annotations',
  props<{ annotations: Annotation[] }>()
);

export const upsertAnnotations = createAction(
  '[Annotation/API] Upsert Annotations',
  props<{ annotations: Annotation[] }>()
);

export const updateAnnotation = createAction(
  '[Annotation/API] Update Annotation',
  props<{ annotation: Update<Annotation> }>()
);

export const updateAnnotations = createAction(
  '[Annotation/API] Update Annotations',
  props<{ annotations: Update<Annotation>[] }>()
);

export const deleteAnnotation = createAction(
  '[Annotation/API] Delete Annotation',
  props<{ annotation: Annotation, documentId: string }>()
);

export const deletedAnnotation = createAction(
  '[Annotation/API] Deleted Annotation',
  props<{ id: string }>()
);

export const deleteAnnotations = createAction(
  '[Annotation/API] Delete Annotations',
  props<{ ids: string[] }>()
);

export const clearAnnotations = createAction(
  '[Annotation/API] Clear Annotations'
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
