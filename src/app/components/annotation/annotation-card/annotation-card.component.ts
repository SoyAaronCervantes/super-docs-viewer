import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {Annotation} from "../../../interfaces/annotations.interface";

import {AnnotationsFacadeService} from "../../../services/facade/annotations/annotations-facade.service";
import {DocumentParamsService} from "../../../services/params/document/document-params.service";

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
    private documentParamsService: DocumentParamsService,
  ) {}

  deleteAnnotation(annotation: Annotation) {
    const documentId = this.documentParamsService.getDocumentIdFromUrl(this.activatedRoute.snapshot)!!;
    this.annotationsFacadeService.deleteAnnotation = {annotation, documentId};
  }
}
