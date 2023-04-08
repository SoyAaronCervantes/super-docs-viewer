import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as AnnotationsActions from '../actions/annotations.actions';
import {Annotation} from "../../../interfaces/annotation.interface";

export const annotationsFeatureKey = 'annotations';

export interface State extends EntityState<Annotation> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Annotation> = createEntityAdapter<Annotation>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const annotationsReducer = createReducer(
  initialState,
  on(AnnotationsActions.addAnnotation,
    (state, action) => adapter.addOne(action.annotation, state)
  ),
  on(AnnotationsActions.upsertAnnotation,
    (state, action) => adapter.upsertOne(action.annotation, state)
  ),
  on(AnnotationsActions.addAnnotations,
    (state, action) => adapter.addMany(action.annotations, state)
  ),
  on(AnnotationsActions.upsertAnnotations,
    (state, action) => adapter.upsertMany(action.annotations, state)
  ),
  on(AnnotationsActions.updateAnnotation,
    (state, action) => adapter.updateOne(action.annotation, state)
  ),
  on(AnnotationsActions.updateAnnotations,
    (state, action) => adapter.updateMany(action.annotations, state)
  ),
  on(AnnotationsActions.deleteAnnotation,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(AnnotationsActions.deleteAnnotations,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(AnnotationsActions.setAnnotations,
    (state, action) => adapter.setAll(action.annotations, state)
  ),
  on(AnnotationsActions.clearAnnotations,
    state => adapter.removeAll(state)
  ),
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
} = annotationsFeature;
