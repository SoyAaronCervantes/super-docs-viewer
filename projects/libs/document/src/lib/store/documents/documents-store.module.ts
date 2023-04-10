import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromDocument from './reducers/documents.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DocumentsEffects } from './effects/documents.effects';
@NgModule({
  imports: [
    StoreModule.forFeature(fromDocument.documentsFeatureKey, fromDocument.documentsReducer),
    EffectsModule.forFeature([DocumentsEffects])]
})
export class DocumentsStoreModule { }
