import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as AnnotationsActions from '../actions/annotations.actions';
import {Annotation} from "../../../interfaces/annotation.interface";
import {Point} from "@angular/cdk/drag-drop";

export const annotationsFeatureKey = 'annotations';

export interface AnnotationsState extends EntityState<Annotation> {
  // additional entities state properties
  coordinates: Point
}

export const adapter: EntityAdapter<Annotation> = createEntityAdapter<Annotation>();

export const initialState: AnnotationsState = adapter.getInitialState({
  // additional entity state properties
  coordinates: {x: 0, y: 0}
});

export const annotationsReducer = createReducer(
  initialState,
  on(AnnotationsActions.addedAnnotation,
    (state, action) => adapter.addOne(action.annotation, state)
  ),
  on(AnnotationsActions.upsertedAnnotation,
    (state, action) => adapter.upsertOne(action.annotation, state)
  ),
  on(AnnotationsActions.addedAnnotations,
    (state, action) => adapter.addMany(action.annotations, state)
  ),
  on(AnnotationsActions.upsertedAnnotations,
    (state, action) => adapter.upsertMany(action.annotations, state)
  ),
  on(AnnotationsActions.updatedAnnotation,
    (state, action) => adapter.updateOne(action.annotation, state)
  ),
  on(AnnotationsActions.updatedAnnotations,
    (state, action) => adapter.updateMany(action.annotations, state)
  ),
  on(AnnotationsActions.deletedAnnotation,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(AnnotationsActions.deletedAnnotations,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(AnnotationsActions.setAnnotations,
    (state, action) => adapter.setAll(action.annotations, state)
  ),
  on(AnnotationsActions.clearedAnnotations,
    state => adapter.removeAll(state)
  ),
  on(AnnotationsActions.setCoords, (state, { coordinates }) => ({
    ...state,
    coordinates
  }) )
);

export const annotationsFeature = createFeature({
  name: annotationsFeatureKey,
  reducer: annotationsReducer,
  extraSelectors: ({ selectAnnotationsState }) => ({
    ...adapter.getSelectors(selectAnnotationsState)
  }),
});

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
  selectCoordinates
} = annotationsFeature;
