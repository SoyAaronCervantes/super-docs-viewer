import {Component, inject} from '@angular/core';
import {DocumentInterface, DocumentsFirestoreService} from "@libs/document";
import {Observable} from "rxjs";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent {
  readonly #documentsFirestoreService = inject(DocumentsFirestoreService);
  documents$: Observable<DocumentInterface[]> = this.#documentsFirestoreService.documents$;
}
