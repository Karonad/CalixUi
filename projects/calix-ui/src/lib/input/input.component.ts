import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'calix-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() labelTitle = 'Label';
  @Input() labelMandatory = true;
  @Input() placeholder = 'Placeholder';
  @Input() value = '';
  @Input() hint = 'This is a hint text to help user';
  @Input() errorMessage = 'Error message';
  @Input() hasError = false;

  @Output() valueChange = new EventEmitter<string>();


  constructor() {}

  changeValue(): void {
    this.valueChange.emit('calix-' + this.value);
  }
}
