import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromDocument from './reducers/document.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DocumentEffects } from './effects/document.effects';
@NgModule({
  imports: [
    StoreModule.forFeature(fromDocument.documentFeatureKey, fromDocument.documentReducer),
    EffectsModule.forFeature([DocumentEffects])]
})
export class DocumentStoreModule { }
