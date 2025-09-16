import { Component, signal } from '@angular/core';
import { Sidebar } from './shared/components/sidebar/sidebar';
import { Main } from './shared/components/main/main';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Sidebar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio');
}
