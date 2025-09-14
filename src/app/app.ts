import { Component, signal } from '@angular/core';
import { Sidebar } from './shared/components/sidebar/sidebar';
import { Main } from './shared/components/main/main';

@Component({
  selector: 'app-root',
  imports: [Sidebar, Main],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio');
}
