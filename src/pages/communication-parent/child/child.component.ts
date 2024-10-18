import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() name: string = ''; // Default value is empty string
}
