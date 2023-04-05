import {Component, ElementRef, Input} from '@angular/core';
import {DocumentInterface} from "../../../interfaces/document.interface";
import {MatSidenav} from "@angular/material/sidenav";
import {Annotation} from "../../../interfaces/annotations.interface";

@Component({
  selector: 'app-coordinate-container',
  templateUrl: './coordinate-container.component.html',
  styleUrls: ['./coordinate-container.component.scss']
})
export class CoordinateContainerComponent {
  @Input() document!: DocumentInterface;
  @Input() sidenav!: MatSidenav;
  @Input() annotations: Annotation[] = [];
  @Input() elementRef!: ElementRef<HTMLHtmlElement>;
}
