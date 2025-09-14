import { Component, input } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Avatar } from '../avatar/avatar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, Avatar, RouterModule, Footer],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
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
