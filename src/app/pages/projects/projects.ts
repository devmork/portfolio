import { Component } from '@angular/core';
import { ProjectCard } from '../../shared/components/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {}
