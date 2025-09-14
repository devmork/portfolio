import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  educations = [
    {
      school: 'Andres Bonifatio College',
      level: 'Senior High School',
      course: 'Humanities and Social Sciences',
      graduated: '2021 - 2023',
      address: 'Dipolog City, Philippines',
      img: '/images/abc-logo.jpg',
    },
    {
      school: 'DMCCollege Foundation Inc.',
      level: 'Bachelors Degree',
      course: 'Information Technology',
      graduated: '2023 - 2028',
      address: 'Dipolog City, Philippines',
      img: '/images/dmc-logo.png',
    },
  ];
}
