import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-zoom-buttons',
  templateUrl: './zoom-buttons.component.html',
  styleUrls: ['./zoom-buttons.component.scss']
})
export class ZoomButtonsComponent {
  @Input() size: number;
  @Output() sizeChange = new EventEmitter<number>();

  changeSize(value: number) {
    if (this.size === null) return;
    this.size += value;

    if (this.size < 0) this.size = 0;
    this.sizeChange.emit(this.size);
  }

}
