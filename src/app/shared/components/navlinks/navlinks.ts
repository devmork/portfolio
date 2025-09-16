import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navlinks',
  imports: [RouterLink, RouterModule],
  templateUrl: './navlinks.html',
  styleUrl: './navlinks.css',
})
export class Navlinks {
  pages = [
    {
      routeLink: '',
      icon: 'ri-home-3-line',
      label: 'Home',
    },
    {
      routeLink: 'projects',
      icon: 'ri-folder-2-line',
      label: 'Projects',
    },
    {
      routeLink: 'about',
      icon: 'ri-user-5-line',
      label: 'About',
    },
    {
      routeLink: 'contact',
      icon: 'ri-contacts-book-line',
      label: 'Contact',
    },
  ];
}
