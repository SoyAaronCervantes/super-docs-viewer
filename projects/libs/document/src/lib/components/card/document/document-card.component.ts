import {Component, Input} from '@angular/core';
import {DocumentInterface} from "../../../interfaces";

@Component({
  selector: 'libs-document-card',
  templateUrl: './document-card.component.html',
  styleUrls: ['./document-card.component.scss']
})
export class DocumentCardComponent {
  @Input() document: DocumentInterface;
}
