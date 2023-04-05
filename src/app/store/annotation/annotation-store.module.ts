import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAnnotation from './reducers/annotation.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AnnotationEffects } from './effects/annotation.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAnnotation.annotationFeatureKey, fromAnnotation.reducer),
    EffectsModule.forFeature([AnnotationEffects])
  ]
})
export class AnnotationStoreModule { }
