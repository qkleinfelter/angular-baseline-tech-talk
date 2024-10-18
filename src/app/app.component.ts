import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'A cool title';
  links = [
    { title: 'Home', link: '/' },
    { title: 'Conditional Rendering', link: '/conditional-rendering' },
    { title: 'Pipes', link: '/pipes' },
    { title: 'Component Communication', link: '/communication' },
  ];
}
