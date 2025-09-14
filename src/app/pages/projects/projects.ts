import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = [
    {
      img: 'https://github.com/devmork/product-preview-card/blob/main/design/solution-screenshot.png?raw=true',
      name: 'Product Preview Card',
      description:
        'A Frontend Mentor challenge where I built a product card for a perfume ad. It helped me improve my JavaScript and CSS skills while having fun with the design.',
      technologies: ['html', 'css'],
      repository: 'https://github.com/devmork/product-preview-card',
      website: '',
    },
    {
      img: '',
      name: 'Contact Card List',
      description:
        'My first Angular project from Angular PH Bootcamp—a contact card list. It helped me learn how to use components and display data in a clean, simple way.',
      technologies: ['html', 'daisyui', 'angular', 'script'],
      repository: 'https://github.com/devmork/contact-card-list',
      website: '',
    },
  ];
}
