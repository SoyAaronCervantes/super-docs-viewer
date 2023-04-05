import {Component, Input} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {DocumentInterface} from "../../../interfaces/document.interface";

@Component({
  selector: 'app-coordinate-image',
  templateUrl: './coordinate-image.component.html',
  styleUrls: ['./coordinate-image.component.scss']
})
export class CoordinateImageComponent {
  @Input() sidenav!: MatSidenav;
  @Input() document!: DocumentInterface
}
