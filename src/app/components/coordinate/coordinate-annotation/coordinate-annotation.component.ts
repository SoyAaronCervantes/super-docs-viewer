import {Component, Input} from '@angular/core';
import {Annotation} from "../../../interfaces/annotation.interface";

@Component({
  selector: 'app-coordinate-annotation',
  templateUrl: './coordinate-annotation.component.html',
  styleUrls: ['./coordinate-annotation.component.scss']
})
export class CoordinateAnnotationComponent {
  @Input() annotation!: Annotation;
}
