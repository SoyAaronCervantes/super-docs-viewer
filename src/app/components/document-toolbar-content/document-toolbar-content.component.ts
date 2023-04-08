import {Component, Input} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {DocumentInterface} from "../../interfaces/document.interface";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-document-toolbar-content',
  templateUrl: './document-toolbar-content.component.html',
  styleUrls: ['./document-toolbar-content.component.scss']
})
export class DocumentToolbarContentComponent {
  @Input() document: DocumentInterface;
  @Input() sidenav: MatSidenav;

  constructor(
    private matSnackBar: MatSnackBar
  ) {}

  openSidenav(sidenav: MatSidenav) {
    if (sidenav === null)  return;

    sidenav?.toggle();

    if (sidenav?.opened) {
      this.matSnackBar.open('Click inside the document to add your annotation', 'Close', {
        duration: 3000,
      });
    }

  }
}
