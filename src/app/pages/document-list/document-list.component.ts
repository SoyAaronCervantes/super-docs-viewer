import { Component, OnInit } from '@angular/core';
import {Document} from "../../interfaces/document.interface";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent {
  documents: Document[] = [
    { id: 1, title: 'Page 1', annotations: 3 },
    { id: 2, title: 'Page 2', annotations: 0 },
    { id: 3, title: 'Page 3', annotations: 1 },
    { id: 4, title: 'Page 4', annotations: 5 },
    { id: 5, title: 'Page 5', annotations: 0 },
  ];
}
