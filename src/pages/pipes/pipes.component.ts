import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
import { RobertsonPipe } from '../../pipes/robertson.pipe';

@Component({
    selector: 'app-pipes',
    imports: [
        CommonModule,
        RobertsonPipe
    ],
    templateUrl: './pipes.component.html',
    styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  now = new Date();
  name = "Joe"
}
