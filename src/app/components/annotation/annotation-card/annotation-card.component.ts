import {Component, Input} from '@angular/core';
import {Annotation} from "../../../interfaces/annotations.interface";

@Component({
  selector: 'app-annotation-card',
  templateUrl: './annotation-card.component.html',
  styleUrls: ['./annotation-card.component.scss']
})
export class AnnotationCardComponent {
  @Input() annotation!: Annotation;
  showCard = false;
}
