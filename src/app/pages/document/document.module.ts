import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentComponent} from './document.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ComponentsModule} from "../../components/components.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {AnnotationModule} from "../../components/annotation/annotation.module";
import {CoordinateModule} from "../../components/coordinate/coordinate.module";
import {DocumentRoutingModule} from "./document-routing.module";

@NgModule({
  declarations: [
    DocumentComponent
  ],
  imports: [
    AnnotationModule,
    CommonModule,
    ComponentsModule,
    CoordinateModule,
    DocumentRoutingModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule
  ]
})
export class DocumentModule { }
