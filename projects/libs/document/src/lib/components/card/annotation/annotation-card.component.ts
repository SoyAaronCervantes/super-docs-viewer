import {Component, inject, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Annotation} from "../../../interfaces";
import {AnnotationsFacadeService, DocumentParamsService} from "../../../services";

@Component({
  selector: 'libs-document-card-annotation',
  templateUrl: './annotation-card.component.html',
  styleUrls: ['./annotation-card.component.scss']
})
export class AnnotationCardComponent {
  readonly #annotationsFacadeService = inject(AnnotationsFacadeService);
  readonly #documentParamsService = inject(DocumentParamsService);
  readonly #activatedRoute = inject(ActivatedRoute);

  @Input()
  annotation: Annotation;

  @Input()
  url: string;

  deleteAnnotation(annotation: Annotation) {
    const documentId = this.#documentParamsService.getDocumentIdFromUrl(this.#activatedRoute.snapshot);
    if (documentId === null) { return }

    this.#annotationsFacadeService.delete = {annotation, documentId};
  }
}
