import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DocumentComponent } from './document.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ComponentsModule} from "../../components/components.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {AnnotationModule} from "../../components/annotation/annotation.module";
import {CoordinateModule} from "../../components/coordinate/coordinate.module";


const routes: Routes = [
  { path: '', component: DocumentComponent }
];

@NgModule({
  declarations: [
    DocumentComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    AnnotationModule,
    CoordinateModule
  ]
})
export class DocumentModule { }
