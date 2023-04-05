import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {DocumentInterface} from "../../interfaces/document.interface";
import {Point} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-image-coordinates',
  templateUrl: './image-coordinates.component.html',
  styleUrls: ['./image-coordinates.component.scss']
})
export class ImageCoordinatesComponent {
  @Input() document: DocumentInterface | undefined;
  @Input() size: number | null = null;
  @Input() matSideNavOpened: boolean | undefined;
  @Output() coordinates = new EventEmitter<Point>();
  @HostListener('document:click', ['$event'])
    handleClick(event: MouseEvent) {
      if (this.size === null) return;
      if (!this.matSideNavOpened) return;

      const imgHTML = event.target as HTMLImageElement;
      if (!imgHTML) { return; }


      if (imgHTML.classList.contains('img')){

        // Scale images based on size input and 100% size
        const x = event.offsetX * (this.size / 100);
        const y = event.offsetY * (this.size / 100);

        this.coordinates.emit({x, y});
      }

    }
}
