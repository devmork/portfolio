import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  socials = [
    {
      header: 'Follow My Journey',
      subhead: 'Follow my creative journey',
      btncontent: 'Go to Instagram',
      png: '/images/ig.png',
      link: 'https://www.instagram.com/deanmork/',
    },
    {
      header: "Let's Connect",
      subhead: 'Connect with me professionally',
      btncontent: 'Go to Linkedin',
      png: '/images/linkedin.png',
      link: 'https://www.linkedin.com/in/den-enoy-0558a0327/',
    },
    {
      header: 'Join the Fun',
      subhead: 'Watch engaging and motivational content',
      btncontent: 'Go to Tiktok',
      png: '/images/tiktok.png',
      link: 'https://www.tiktok.com/@notdevmork',
    },
    {
      header: 'Explore the Code',
      subhead: 'Explore my repositories',
      btncontent: 'Go to Github',
      png: '/images/gh.png',
      link: 'https://github.com/devmork',
    },
  ];
}
