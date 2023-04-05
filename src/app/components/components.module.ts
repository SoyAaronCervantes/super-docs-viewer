import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {RouterModule} from "@angular/router";

import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

import { ZoomButtonsComponent } from './zoom-buttons/zoom-buttons.component';
import { DocumentToolbarContentComponent } from './document-toolbar-content/document-toolbar-content.component';
import { DocumentCardComponent } from './document-card/document-card.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    DocumentCardComponent,
    ZoomButtonsComponent,
    DocumentToolbarContentComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    DragDropModule,
    MatSnackBarModule,
    RouterModule,
    MatIconModule,
    NgOptimizedImage
  ],
  exports: [
    DocumentCardComponent,
    ZoomButtonsComponent,
    DocumentToolbarContentComponent
  ]
})
export class ComponentsModule { }
