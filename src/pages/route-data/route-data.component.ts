import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-route-data',
    imports: [],
    templateUrl: './route-data.component.html',
    styleUrl: './route-data.component.scss'
})
export class RouteDataComponent {
  // Provided by route data if available
  @Input() username: string = 'Default name';
}
