import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {MatSnackBarModule} from "@angular/material/snack-bar";

import { AnnotationsEffects } from './effects/annotations.effects';

import * as fromAnnotations from './reducers/annotations.reducer';

@NgModule({
  imports: [
    MatSnackBarModule,
    StoreModule.forFeature(fromAnnotations.annotationsFeatureKey, fromAnnotations.annotationsReducer),
    EffectsModule.forFeature([AnnotationsEffects])
  ]
})
export class AnnotationsStoreModule { }
