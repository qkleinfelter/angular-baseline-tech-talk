import { CommonModule } from '@angular/common';
import { Component, signal, Signal } from '@angular/core';

@Component({
    selector: 'app-conditional-rendering',
    imports: [CommonModule],
    templateUrl: './conditional-rendering.component.html',
    styleUrl: './conditional-rendering.component.scss'
})
export class ConditionalRenderingComponent {
  showMe: Signal<boolean> = signal(true);
}
