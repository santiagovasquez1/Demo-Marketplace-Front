import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.sass'
})
export class ModalComponent {


  @Input() open = false;
  @Output() close = new EventEmitter<void>();
  @Input() large = false;

  constructor() {}


  toggleModal(): void {
    this.close.emit();
  }
  

}
