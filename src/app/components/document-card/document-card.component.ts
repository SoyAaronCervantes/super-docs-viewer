import {Component, Input} from '@angular/core';
import {Document} from "../../interfaces/document.interface";

@Component({
  selector: 'app-document-card',
  templateUrl: './document-card.component.html',
  styleUrls: ['./document-card.component.scss']
})
export class DocumentCardComponent {
  @Input() document: Document | null = null;
}
