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
  @Input() errorMessage = 'Mandatory field, please fill it';
  @Input() hasError = false;

  @Output() valueChange = new EventEmitter<string | null>();
  @Output() hasErrorChange = new EventEmitter<boolean>();

  changeValue(): void {
    let emitValue: string | null = `calix-${this.value}`;
    if (this.inputMandatory) {
      if (!this.value) {
        this.hasError = true;
        this.hasErrorChange.emit(this.hasError);
        emitValue = null;
      } else if (this.hasError) {
        this.hasError = false;
        this.hasErrorChange.emit(this.hasError);
      }
    }
    this.valueChange.emit(emitValue);
  }
}
