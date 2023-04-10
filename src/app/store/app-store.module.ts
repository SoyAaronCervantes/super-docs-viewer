import {isDevMode, NgModule} from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

import {appReducer} from "./reducers/app.reducer";

import {EffectsModule} from "@ngrx/effects";
import { AnnotationsStoreModule, DocumentsStoreModule } from '@libs/document';
@NgModule({
  imports: [
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
    AnnotationsStoreModule,
    DocumentsStoreModule
  ]
})
export class AppStoreModule { }
