import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

import {ImagesStorageService} from "../../../services/firebase/images/images-storage.service";

import {DocumentInterface} from "../../../interfaces/document.interface";
import {Annotation} from "../../../interfaces/annotation.interface";

import {EMPTY, Observable} from "rxjs";
import {Point} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-coordinate-container',
  templateUrl: './coordinate-container.component.html',
  styleUrls: ['./coordinate-container.component.scss']
})
export class CoordinateContainerComponent {
  @Input() document: DocumentInterface;
  @Input() annotations: Annotation[];
  @Input() sidenav: MatSidenav;
  @Input() size: number;
  @ViewChild('annotationContainer')
  annotationContainer: ElementRef<HTMLDivElement>;
  url$: Observable<string> = EMPTY;

  constructor(
    private imagesStorageService: ImagesStorageService
  ) {}

  getImageUrl(annotation: Annotation) {
    if (!annotation.image) { return; }
    if (this.url$ !== EMPTY) { return; }
    this.url$ = this.imagesStorageService.getImageUrl(annotation.image);
  }

  getAnnotationsPosition(point: Point, percentageSize: number): Point {
    // Get the position of the annotation from the percentage of the image
    const x = Math.round((point.x * percentageSize) / 100);
    const y = Math.round((point.y * percentageSize) / 100);
    return {x, y};
  }

}
