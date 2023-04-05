import {Component, ElementRef, Input} from '@angular/core';
import {Annotation} from "../../../interfaces/annotations.interface";
import {CoordinateContainerComponent} from "../coordinate-container/coordinate-container.component";

@Component({
  selector: 'app-coordinate-annotation',
  templateUrl: './coordinate-annotation.component.html',
  styleUrls: ['./coordinate-annotation.component.scss']
})
export class CoordinateAnnotationComponent {
  @Input() annotation!: Annotation;
}
