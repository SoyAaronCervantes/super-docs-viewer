import {Component, HostListener, Input} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {DocumentInterface} from "../../../interfaces/document.interface";

@Component({
  selector: 'app-coordinate-image',
  templateUrl: './coordinate-image.component.html',
  styleUrls: ['./coordinate-image.component.scss']
})
export class CoordinateImageComponent {
  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent) {
    const target = event.target as HTMLImageElement;
    if (!target) return;

    if (target.classList.contains('coordinate-image')) {

      // Get the x and y coordinates of the click
      const x = event.offsetX / target.offsetWidth * 100;
      const y = event.offsetY / target.offsetHeight * 100;

    }
  }

  @Input() sidenav: MatSidenav;
  @Input() document: DocumentInterface
  @Input() size: number;
}
