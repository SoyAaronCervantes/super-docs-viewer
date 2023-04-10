import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'libs-document-buttons-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss']
})
export class ZoomButtonComponent {
  @Input()
  size: number;

  @Output()
  sizeChange = new EventEmitter<number>();

  changeSize(value: number) {
    if (this.size === null) return;
    this.size += value;

    if (this.size < 0) this.size = 0;
    this.sizeChange.emit(this.size);
  }
}
