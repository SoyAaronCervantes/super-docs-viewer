import {Component, inject, Input} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'libs-document-toolbar-add-annotation',
  templateUrl: './add-annotation.component.html',
  styleUrls: ['./add-annotation.component.scss']
})
export class AddAnnotationComponent {
  readonly #matSnackBar = inject(MatSnackBar)
  @Input()
  sidenav: MatSidenav;

  openSidenav(sidenav: MatSidenav) {
    if (sidenav === null)  return;

    sidenav?.toggle();

    if (sidenav?.opened) {
      this.#matSnackBar.open('Click inside the document to add your annotation', 'Close', {
        duration: 3000,
      });
    }

  }
}
