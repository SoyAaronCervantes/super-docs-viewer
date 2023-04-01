import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DocumentComponent } from './document.component';


const routes: Routes = [
  { path: '', component: DocumentComponent }
];

@NgModule({
  declarations: [
    DocumentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DocumentModule { }
