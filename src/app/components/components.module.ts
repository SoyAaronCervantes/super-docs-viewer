import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentCardComponent } from './document-card/document-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import { ZoomButtonsComponent } from './zoom-buttons/zoom-buttons.component';
import {MatIconModule} from "@angular/material/icon";
import { DocumentToolbarContentComponent } from './document-toolbar-content/document-toolbar-content.component';
import { NewAnnotationComponent } from './new-annotation/new-annotation.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    DocumentCardComponent,
    ZoomButtonsComponent,
    DocumentToolbarContentComponent,
    NewAnnotationComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    RouterModule,
    FormsModule,
    MatIconModule
  ],
  exports: [
    DocumentCardComponent,
    ZoomButtonsComponent,
    DocumentToolbarContentComponent,
    NewAnnotationComponent
  ]
})
export class ComponentsModule { }
