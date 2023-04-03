import {Component, Input} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {DocumentInterface} from "../../interfaces/document.interface";

@Component({
  selector: 'app-document-toolbar-content',
  templateUrl: './document-toolbar-content.component.html',
  styleUrls: ['./document-toolbar-content.component.scss']
})
export class DocumentToolbarContentComponent {
  @Input() document: DocumentInterface | null = null;
  @Input() sidenav: MatSidenav | null = null;
}
