import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentCardComponent } from './document-card/document-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import { ZoomButtonsComponent } from './zoom-buttons/zoom-buttons.component';
import {MatIconModule} from "@angular/material/icon";
import { DocumentToolbarContentComponent } from './document-toolbar-content/document-toolbar-content.component';



@NgModule({
  declarations: [
    DocumentCardComponent,
    ZoomButtonsComponent,
    DocumentToolbarContentComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatIconModule
  ],
  exports: [
    DocumentCardComponent,
    ZoomButtonsComponent,
    DocumentToolbarContentComponent
  ]
})
export class ComponentsModule { }
