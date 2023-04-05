import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {RouterModule} from "@angular/router";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MaterialFileInputModule} from "ngx-material-file-input";

import { ZoomButtonsComponent } from './zoom-buttons/zoom-buttons.component';
import { DocumentToolbarContentComponent } from './document-toolbar-content/document-toolbar-content.component';
import { NewAnnotationComponent } from './new-annotation/new-annotation.component';
import { DocumentCardComponent } from './document-card/document-card.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { ImageCoordinatesComponent } from './image-coordinates/image-coordinates.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import { AnnotationCardComponent } from './annotation-card/annotation-card.component';

@NgModule({
  declarations: [
    DocumentCardComponent,
    ZoomButtonsComponent,
    DocumentToolbarContentComponent,
    NewAnnotationComponent,
    ImageCoordinatesComponent,
    AnnotationCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    DragDropModule,
    MatInputModule,
    MatSnackBarModule,
    MaterialFileInputModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    NgOptimizedImage
  ],
  exports: [
    DocumentCardComponent,
    ZoomButtonsComponent,
    DocumentToolbarContentComponent,
    NewAnnotationComponent,
    ImageCoordinatesComponent,
    AnnotationCardComponent
  ]
})
export class ComponentsModule { }
