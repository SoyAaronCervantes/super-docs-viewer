import {Component, Input} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

import {ImagesStorageService} from "../../../services/firebase/images/images-storage.service";

import {DocumentInterface} from "../../../interfaces/document.interface";
import {Annotation} from "../../../interfaces/annotation.interface";

import {EMPTY, Observable} from "rxjs";

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
  url$: Observable<string> = EMPTY;

  constructor(
    private imagesStorageService: ImagesStorageService
  ) {}

  getImageUrl(annotation: Annotation) {
    if (!annotation.image) { return; }
    if (this.url$ !== EMPTY) { return; }
    this.url$ = this.imagesStorageService.getImageUrl(annotation.image);
  }
}
