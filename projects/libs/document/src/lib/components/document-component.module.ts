import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";

import {CdkDrag} from "@angular/cdk/drag-drop";

import {MaterialFileInputModule} from "ngx-material-file-input";

import { DocumentCardComponent, AnnotationCardComponent } from './card';
import { ToolbarContentComponent, AddAnnotationComponent } from './toolbar';

import { ZoomButtonComponent } from './buttons';

import { AnnotationCoordinatesComponent, ImageCoordinatesComponent, ContainerCoordinatesComponent } from './coordinates';
import {NewAnnotationComponent} from "./annotation";

@NgModule({
  declarations: [
    DocumentCardComponent,
    ToolbarContentComponent,
    AddAnnotationComponent,
    ZoomButtonComponent,
    AnnotationCoordinatesComponent,
    ImageCoordinatesComponent,
    ContainerCoordinatesComponent,
    AnnotationCardComponent,
    NewAnnotationComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    MatIconModule,
    CdkDrag,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MaterialFileInputModule,
    ReactiveFormsModule
  ],
  exports: [
    DocumentCardComponent,
    ToolbarContentComponent,
    AddAnnotationComponent,
    ZoomButtonComponent,
    AnnotationCoordinatesComponent,
    ImageCoordinatesComponent,
    ContainerCoordinatesComponent,
    AnnotationCardComponent,
    NewAnnotationComponent
  ]
})
export class DocumentComponentModule { }
