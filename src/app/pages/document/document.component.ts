import { Component, OnInit } from '@angular/core';
import {DocumentsFirestoreService} from "../../services/firebase/documents/documents-firestore.service";

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent {
  constructor(private documentsFirestoreService: DocumentsFirestoreService) {
    this.documentsFirestoreService.document$('1').subscribe(console.log);
  }
}
