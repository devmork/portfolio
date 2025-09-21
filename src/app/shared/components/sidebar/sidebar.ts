import { Component, input } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Avatar } from '../avatar/avatar';
import { Footer } from '../footer/footer';
import { Navlinks } from '../navlinks/navlinks';

@Component({
  selector: 'app-sidebar',
  imports: [Avatar, Footer, Navlinks],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  closeDrawer() {
    const drawerToggle = document.getElementById('my-drawer-2') as HTMLInputElement;
    if (drawerToggle) {
      drawerToggle.checked = false;
    }
  }
}
