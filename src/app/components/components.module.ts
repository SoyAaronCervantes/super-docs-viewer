import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentCardComponent } from './document-card/document-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import { ZoomButtonsComponent } from './zoom-buttons/zoom-buttons.component';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    DocumentCardComponent,
    ZoomButtonsComponent
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
    ZoomButtonsComponent
  ]
})
export class ComponentsModule { }
