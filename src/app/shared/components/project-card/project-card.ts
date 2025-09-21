import { Component } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
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
  ];
}
