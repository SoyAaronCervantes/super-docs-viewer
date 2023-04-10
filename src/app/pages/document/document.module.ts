import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";

import {LetModule, PushModule} from "@ngrx/component";

import {DocumentComponentModule} from "@libs/document";

import {DocumentComponent} from './document.component';
import {DocumentRoutingModule} from "./document-routing.module";


@NgModule({
  declarations: [
    DocumentComponent
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    CommonModule,
    DocumentRoutingModule,
    DocumentComponentModule,
    PushModule,
    LetModule
  ]
})
export class DocumentModule { }
