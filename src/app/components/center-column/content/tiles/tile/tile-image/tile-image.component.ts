import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile-image',
  templateUrl: './tile-image.component.html',
  styleUrls: ['./tile-image.component.css'],
})
export class TileImageComponent implements OnInit {
  @Input() url = '';

  constructor() {}

  ngOnInit(): void {}
}
