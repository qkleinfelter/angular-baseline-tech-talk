import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, output, Output } from '@angular/core';

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
  @Output() oldOutput = new EventEmitter<string>();
  newOutput = output<string>();

  // Two way Binding
  @Input() something = null;
  @Output() somethingChange = new EventEmitter<any>();

  sendOldOutput() {
    this.oldOutput.emit("The old stuff")
  }

  sendNewOutput() {
    this.newOutput.emit("The new stuff")
  }
}
