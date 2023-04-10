import {Component, HostListener, inject, Input} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {DocumentInterface} from "../../../interfaces/document.interface";
import {AnnotationsFacadeService} from "../../../services/facade/annotations/annotations-facade.service";

@Component({
  selector: 'app-coordinate-image',
  templateUrl: './coordinate-image.component.html',
  styleUrls: ['./coordinate-image.component.scss']
})
export class CoordinateImageComponent {
  readonly #annotationsFacadeService = inject(AnnotationsFacadeService);

  @Input()
  sidenav: MatSidenav;
  @Input()
  document: DocumentInterface
  @Input()
  size: number;

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent) {
    const target = event.target as HTMLDivElement;
    if (!target) return;
    if (target.classList.contains('annotations--container') && this.sidenav.opened) {

      // Get coordinates from annotation container
      const {x, y} = target.getBoundingClientRect();

      // Get coordinate from click event
      const {clientX, clientY} = event;

      // Calculate the difference between the two
      const diffX = Math.round(clientX - x);
      const diffY = Math.round(clientY - y);

      // Calculate relative coordinates for 100% zoom
      const relativeX = Math.round((diffX * 100) / this.size );
      const relativeY = Math.round( (diffY * 100) / this.size );

      // Update annotation store
      this.#annotationsFacadeService.coordinates = {x: relativeX, y: relativeY};
    }
  }

}
