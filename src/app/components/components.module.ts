import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentCardComponent } from './document-card/document-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    DocumentCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    DocumentCardComponent
  ]
})
export class ComponentsModule { }
