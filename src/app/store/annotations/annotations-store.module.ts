import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromAnnotations from './reducers/annotations.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(fromAnnotations.annotationsFeatureKey, fromAnnotations.annotationsReducer)
  ]
})
export class AnnotationsStoreModule { }
