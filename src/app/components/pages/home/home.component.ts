import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  billboard = '/assets/Malachi_1.jpeg';
  matrix = ['/assets/surf_1.jpeg', '/assets/Malachi_2.jpeg'];

  constructor() {}

  ngOnInit(): void {}
}
