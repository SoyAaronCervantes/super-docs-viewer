import { Component } from '@angular/core';
import {DocumentsFirestoreService} from "../../services/firebase/documents/documents-firestore.service";
import {AnnotationsFirestoreService} from "../../services/firebase/annotations/annotations-firestore.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent {
  size = 100;

  document$ = this.documentsFirestoreService.document$(this.getDocumentIdFromUrl());
  annotations$ = this.annotationsFirestoreService.getAnnotationsFromDocument(this.getDocumentIdFromUrl());

  constructor(
    private documentsFirestoreService: DocumentsFirestoreService,
    private annotationsFirestoreService: AnnotationsFirestoreService,
    private activatedRoute: ActivatedRoute,
  ) {}

  private getDocumentIdFromUrl() {
    const paramMap = this.activatedRoute.snapshot.paramMap;
    return paramMap.get('id')!!;
  }

}
