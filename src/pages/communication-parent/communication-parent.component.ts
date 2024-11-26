import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, model, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-communication-parent',
    imports: [
        CommonModule,
        ChildComponent,
        FormsModule
    ],
    templateUrl: './communication-parent.component.html',
    styleUrl: './communication-parent.component.scss'
})
export class CommunicationParentComponent implements AfterViewInit {
  childInput = 'Some Typescript Value'
  @ViewChild(ChildComponent) childComponent!: ChildComponent;
  fieldValue: string = '';
  dogUrl = '';

  // Two way binding
  somethingOnParent = null;
  something2OnParent = model(0);

  constructor(private apiService: ApiService) {}

  ngAfterViewInit(): void {
    this.subscribeToChildOutput();
    this.apiService.getDog().subscribe(data => {
      console.log(data)
      this.dogUrl = data.message;
    });
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
