import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { NewAnnotationComponent } from './new-annotation/new-annotation.component';
import { AnnotationCardComponent } from './annotation-card/annotation-card.component';
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatButtonModule } from '@angular/material/button';
import {MaterialFileInputModule} from "ngx-material-file-input";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    NewAnnotationComponent,
    AnnotationCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MaterialFileInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    MatInputModule,
  ],
  exports: [
    NewAnnotationComponent,
    AnnotationCardComponent
  ]
})
export class AnnotationModule { }
