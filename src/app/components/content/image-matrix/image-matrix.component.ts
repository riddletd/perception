import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-matrix',
  templateUrl: './image-matrix.component.html',
  styleUrls: ['./image-matrix.component.css'],
})
export class ImageMatrixComponent implements OnInit {
  @Input() urls = [];

  constructor() {}

  ngOnInit(): void {}
}
