import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from "@angular/material/toolbar";

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';

import { StoreModule } from '@ngrx/store';
import {EffectsModule} from "@ngrx/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import {AppRoutesModule} from "./app-routes.module";

import { appReducer } from './store/reducers/app.reducer';

import {DocumentStoreModule} from "./store/document/document-store.module";
import {AnnotationsStoreModule} from "./store/annotations/annotations-store.module";

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutesModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
    AnnotationsStoreModule,
    DocumentStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
