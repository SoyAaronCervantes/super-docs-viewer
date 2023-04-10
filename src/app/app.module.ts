import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from "@angular/material/toolbar";

import { AppComponent } from './app.component';
import {AppRoutesModule} from "./app-routes.module";

import {AppStoreModule} from "./store/app-store.module";

import {AppFirebaseModule} from "./firebase/app-firebase.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutesModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppStoreModule,
    AppFirebaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
