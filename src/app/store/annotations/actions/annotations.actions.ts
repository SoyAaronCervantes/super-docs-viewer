import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import {Annotation} from "../../../interfaces/annotation.interface";

export const setAnnotations = createAction(
  '[Annotations/API] Set Annotations',
  props<{ annotations: Annotation[] }>()
);

export const addAnnotation = createAction(
  '[Annotations/API] Add Annotation',
  props<{ annotation: Annotation }>()
);

export const upsertAnnotation = createAction(
  '[Annotations/API] Upsert Annotation',
  props<{ annotation: Annotation }>()
);

export const addAnnotations = createAction(
  '[Annotations/API] Add Annotations',
  props<{ annotations: Annotation[] }>()
);

export const upsertAnnotations = createAction(
  '[Annotations/API] Upsert Annotations',
  props<{ annotations: Annotation[] }>()
);

export const updateAnnotation = createAction(
  '[Annotations/API] Update Annotation',
  props<{ annotation: Update<Annotation> }>()
);

export const updateAnnotations = createAction(
  '[Annotations/API] Update Annotations',
  props<{ annotations: Update<Annotation>[] }>()
);

export const deleteAnnotation = createAction(
  '[Annotations/API] Delete Annotation',
  props<{ id: string }>()
);

export const deleteAnnotations = createAction(
  '[Annotations/API] Delete Annotations',
  props<{ ids: string[] }>()
);

export const clearAnnotations = createAction(
  '[Annotations/API] Clear Annotations'
);
