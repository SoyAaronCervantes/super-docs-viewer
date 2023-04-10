import {Component, ElementRef, inject, Input, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {EMPTY, Observable} from "rxjs";
import {Annotation, DocumentInterface} from "../../../interfaces";
import {ImagesStorageService} from "../../../services";
import {Point} from "@angular/cdk/drag-drop";

@Component({
  selector: 'libs-document-coordinates-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerCoordinatesComponent {
  readonly #imagesStorageService = inject(ImagesStorageService);

  @Input()
  document: DocumentInterface;

  @Input()
  annotations: Annotation[];

  @Input()
  sidenav: MatSidenav;

  @Input()
  size: number;

  @ViewChild('annotationContainer')
  annotationContainer: ElementRef<HTMLDivElement>;

  url$: Observable<string> = EMPTY;

  getImageUrl(annotation: Annotation) {
    if (!annotation.image) { return; }
    if (this.url$ !== EMPTY) { return; }
    this.url$ = this.#imagesStorageService.getImageUrl(annotation.image);
  }

  getAnnotationsPosition(point: Point, percentageSize: number): Point {
    // Get the position of the annotation from the percentage of the image
    const x = Math.round((point.x * percentageSize) / 100);
    const y = Math.round((point.y * percentageSize) / 100);
    return {x, y};
  }
}
