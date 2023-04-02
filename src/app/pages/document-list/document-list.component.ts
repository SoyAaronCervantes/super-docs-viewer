import { Component } from '@angular/core';
import {DocumentInterface} from "../../interfaces/document.interface";
import {DocumentsFirestoreService} from "../../services/firebase/documents/documents-firestore.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent {
  documents$: Observable<DocumentInterface[]> = this.documentsFirestoreService.documents$;

  constructor(private documentsFirestoreService: DocumentsFirestoreService) {}
}
