import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromAnnotation from './reducers/annotation.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AnnotationEffects } from './effects/annotation.effects';
import {MatSnackBarModule} from "@angular/material/snack-bar";



@NgModule({
  imports: [
    MatSnackBarModule,
    EffectsModule.forFeature([AnnotationEffects]),
    StoreModule.forFeature(fromAnnotation.annotationFeatureKey, fromAnnotation.annotationReducer),
  ]
})
export class AnnotationStoreModule { }
