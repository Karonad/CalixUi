import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'calix-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() labelTitle = 'Label';
  @Input() inputMandatory = false;
  @Input() placeholder = 'Placeholder';
  @Input() value = '';
  @Input() hint = 'This is a hint text to help user';
  @Input() errorMessage = 'Error message';
  @Input() hasError = false;

  @Output() valueChange = new EventEmitter<string | null>();
  @Output() hasErrorChange = new EventEmitter<boolean>();

  constructor() {}

  changeValue(): void {
    if (this.inputMandatory) {
      if (!this.value || this.value === '') {
        this.hasError = true;
        this.valueChange.emit(null);
        this.hasErrorChange.emit(this.hasError);
      }
      if (this.value && this.value !== '' && this.hasError) {
        this.hasError = false;
        this.hasErrorChange.emit(this.hasError);
        this.valueChange.emit('calix-' + this.value);
      }
    }
    this.valueChange.emit('calix-' + this.value);
  }
}
