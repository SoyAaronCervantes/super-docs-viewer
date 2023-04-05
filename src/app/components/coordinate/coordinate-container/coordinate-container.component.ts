import {Component, ElementRef, Input} from '@angular/core';
import {DocumentInterface} from "../../../interfaces/document.interface";
import {MatSidenav} from "@angular/material/sidenav";
import {Annotation} from "../../../interfaces/annotations.interface";
import {ImagesStorageService} from "../../../services/firebase/images/images-storage.service";
import {EMPTY, Observable} from "rxjs";

@Component({
  selector: 'app-coordinate-container',
  templateUrl: './coordinate-container.component.html',
  styleUrls: ['./coordinate-container.component.scss']
})
export class CoordinateContainerComponent {
  @Input() document: DocumentInterface;
  @Input() sidenav: MatSidenav;
  @Input() size: number;
  @Input() annotations: Annotation[];
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
