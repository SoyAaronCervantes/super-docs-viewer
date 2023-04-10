import {Component, inject, Input} from '@angular/core';
import {DocumentInterface} from "../../../interfaces";
import {MatSidenav} from "@angular/material/sidenav";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'libs-document-toolbar-content',
  templateUrl: './toolbar-content.component.html',
  styleUrls: ['./toolbar-content.component.scss']
})
export class ToolbarContentComponent {
  @Input()
  document: DocumentInterface;
  @Input()
  sidenav: MatSidenav;
}
