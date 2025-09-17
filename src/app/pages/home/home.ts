import { Component } from '@angular/core';
import { Technologies } from '../../shared/components/technologies/technologies';

@Component({
  selector: 'app-home',
  imports: [Technologies],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
