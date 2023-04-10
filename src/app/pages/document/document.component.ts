import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {DocumentMediatorService, AnnotationMediatorService} from "@libs/document";

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent {
  readonly #documentMediator = inject(DocumentMediatorService);
  readonly #annotationsMediator = inject(AnnotationMediatorService);

  @ViewChild('coordinatesContainer', { static: true })
  elementRef!: ElementRef<HTMLHtmlElement>;

  size = 100;

  document$ = this.#documentMediator.document;
  annotations$ = this.#annotationsMediator.annotations$;
}
