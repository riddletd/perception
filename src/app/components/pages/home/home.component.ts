import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  urls = [
    '/assets/surf_1.jpeg',
    '/assets/surf_2.png',
    '/assets/surf_3.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
