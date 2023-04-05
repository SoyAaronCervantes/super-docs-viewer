import {Component, Input} from '@angular/core';
import {Annotation} from "../../../interfaces/annotations.interface";
import {AnnotationsFacadeService} from "../../../services/facade/annotations-facade.service";
import {ActivatedRoute} from "@angular/router";
import {DocumentService} from "../../../services/document/document.service";

@Component({
  selector: 'app-annotation-card',
  templateUrl: './annotation-card.component.html',
  styleUrls: ['./annotation-card.component.scss']
})
export class AnnotationCardComponent {
  @Input() annotation: Annotation;
  @Input() url: string;

  constructor(
    private annotationsFacadeService: AnnotationsFacadeService,
    private activatedRoute: ActivatedRoute,
    private documentService: DocumentService
  ) {}

  deleteAnnotation(annotation: Annotation) {
    const documentId = this.documentService.getDocumentIdFromUrl(this.activatedRoute);
    console.log('deleteAnnotation', annotation, documentId);
    this.annotationsFacadeService.deleteAnnotation(annotation, documentId!!);
  }
}
