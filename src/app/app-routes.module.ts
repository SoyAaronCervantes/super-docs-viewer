import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'documents',
    children: [
      { path: '', loadChildren: () => import('./pages/document-list/document-list.module').then(m => m.DocumentListModule) },
      { path: ':id', loadChildren: () => import('./pages/document/document.module').then(m => m.DocumentModule) },
      { path: 'not-found', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
    ]
  },
  { path: '', redirectTo: 'documents', pathMatch: 'full' },
  { path: '**', redirectTo: 'documents' },
];

@NgModule({
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
})
export class AppRoutesModule { }
