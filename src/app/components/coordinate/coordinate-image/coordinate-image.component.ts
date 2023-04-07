import {Component, HostListener, Input} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {DocumentInterface} from "../../../interfaces/document.interface";
import {AnnotationsFacadeService} from "../../../services/facade/annotations/annotations-facade.service";

@Component({
  selector: 'app-coordinate-image',
  templateUrl: './coordinate-image.component.html',
  styleUrls: ['./coordinate-image.component.scss']
})
export class CoordinateImageComponent {
  @Input() sidenav: MatSidenav;
  @Input() document: DocumentInterface
  @Input() size: number;

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent) {
    const target = event.target as HTMLDivElement;
    if (!target) return;
    if (target.classList.contains('annotations--container') && this.sidenav.opened) {

      // Get the coordinates of the click
      const x = event.clientX;
      const y = event.clientY;

      this.annotationsFacadeService.updateCoordinates({x, y});
    }
  }

  constructor(
    private annotationsFacadeService: AnnotationsFacadeService
  ) {}
}
