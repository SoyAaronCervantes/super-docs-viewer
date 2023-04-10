import {Component, Input} from '@angular/core';
import {Annotation} from "../../../interfaces";

@Component({
  selector: 'libs-document-coordinates-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.scss']
})
export class AnnotationCoordinatesComponent {
  @Input() annotation!: Annotation;
}
