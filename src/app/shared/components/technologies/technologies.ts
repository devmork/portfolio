import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [],
  templateUrl: './technologies.html',
  styleUrl: './technologies.css',
})
export class Technologies {
  technologies = [
    { name: 'Angular', png: '/images/angular.png' },
    { name: '.NET Core', png: '/images/aspnetcore.png' },
    { name: 'C#', png: '/images/csharp.png' },
    { name: 'CSS', png: '/images/css.png' },
    { name: 'Figma', png: '/images/figma.png' },
    { name: 'Git', png: '/images/git.png' },
    { name: 'Github', png: '/images/github.png' },
    { name: 'HTML5', png: '/images/html.png' },
    { name: 'Javascript', png: '/images/javascript.png' },
    { name: 'SQLite', png: '/images/sqlite.png' },
    { name: 'SQL Server', png: '/images/sqlserver.png' },
    { name: 'Tailwind', png: '/images/tailwind.png' },
    { name: 'Typescript', png: '/images/typescript.png' },
    { name: 'Visual Studio', png: '/images/visualstudio.png' },
    { name: 'VSCode', png: '/images/vscode.png' },
  ];
}
