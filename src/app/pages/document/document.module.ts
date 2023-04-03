import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DocumentComponent } from './document.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ComponentsModule} from "../../components/components.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";


const routes: Routes = [
  { path: '', component: DocumentComponent }
];

@NgModule({
  declarations: [
    DocumentComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule.forChild(routes),
    ComponentsModule,
  ]
})
export class DocumentModule { }
