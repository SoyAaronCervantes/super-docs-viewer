import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-zoom-buttons',
  templateUrl: './zoom-buttons.component.html',
  styleUrls: ['./zoom-buttons.component.scss']
})
export class ZoomButtonsComponent {
  @Input() size: number | null = null;
  @Output() sizeChange = new EventEmitter<number>();

  changeSize(value: number) {
    if (this.size === null) {
      return;
    }
    this.size += value;
    this.sizeChange.emit(this.size);
  }
}
