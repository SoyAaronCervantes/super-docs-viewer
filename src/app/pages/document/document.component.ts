import { Component } from '@angular/core';
import {DocumentsFirestoreService} from "../../services/firebase/documents/documents-firestore.service";
import {AnnotationsFirestoreService} from "../../services/firebase/annotations/annotations-firestore.service";

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent {
  size = 100;

  document$ = this.documentsFirestoreService.document$('1');
  annotations$ = this.annotationsFirestoreService.getAnnotationsFromDocument('1');

  constructor(
    private documentsFirestoreService: DocumentsFirestoreService,
    private annotationsFirestoreService: AnnotationsFirestoreService
  ) {}

}
