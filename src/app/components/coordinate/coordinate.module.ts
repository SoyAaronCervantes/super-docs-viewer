import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { CoordinateContainerComponent } from './coordinate-container/coordinate-container.component';
import { CoordinateImageComponent } from './coordinate-image/coordinate-image.component';
import { CoordinateAnnotationComponent } from './coordinate-annotation/coordinate-annotation.component';
import {CdkDrag} from "@angular/cdk/drag-drop";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {AnnotationModule} from "../annotation/annotation.module";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    CoordinateContainerComponent,
    CoordinateImageComponent,
    CoordinateAnnotationComponent
  ],
  exports: [
    CoordinateContainerComponent
  ],
  imports: [
    CommonModule,
    CdkDrag,
    MatButtonModule,
    MatIconModule,
    AnnotationModule,
    MatCardModule,
    NgOptimizedImage
  ]
})
export class CoordinateModule { }
