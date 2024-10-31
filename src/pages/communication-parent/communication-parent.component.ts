import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-communication-parent',
  standalone: true,
  imports: [
    CommonModule,
    ChildComponent
  ],
  templateUrl: './communication-parent.component.html',
  styleUrl: './communication-parent.component.scss',
})
export class CommunicationParentComponent implements AfterViewInit {
  childInput = 'Some Typescript Value'
  @ViewChild(ChildComponent) childComponent!: ChildComponent;

  ngAfterViewInit(): void {
    this.subscribeToChildOutput();
  }

  handleOldOutput($event: string) {
    console.log($event);
  }

  handleNewOutput($event: string) {
    console.log($event);
  }

  subscribeToChildOutput() {
    this.childComponent?.newOutput.subscribe(($event) => {
      console.log(`Logging event from typescript subscribe: ${$event}`);
    });
    this.childComponent?.oldOutput.subscribe(($event) => {
      console.log(`Logging event from typescript subscribe: ${$event}`);
    });
  }
}
