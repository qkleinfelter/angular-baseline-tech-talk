import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';

@Component({
    selector: 'app-child',
    imports: [
        CommonModule,
    ],
    templateUrl: './child.component.html',
    styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() name: string = ''; // Default value is empty string
  readonly nameSignal = input<string>('');
  @Output() oldOutput = new EventEmitter<string>();
  newOutput = output<string>();

  // Two way Binding
  @Input() something = null;
  @Output() somethingChange = new EventEmitter<any>();
  something2 = input<number>();
  something2Change = output<number>();

  sendOldOutput() {
    this.oldOutput.emit("The old stuff")
  }

  sendNewOutput() {
    this.newOutput.emit("The new stuff")
  }
}
