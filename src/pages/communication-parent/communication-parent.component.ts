import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
export class CommunicationParentComponent {
  childInput = 'Some Typescript Value'
}
