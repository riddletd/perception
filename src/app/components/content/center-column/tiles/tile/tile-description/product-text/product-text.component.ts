import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-text',
  templateUrl: './product-text.component.html',
  styleUrls: ['./product-text.component.css'],
})
export class ProductTextComponent implements OnInit {
  @Input() text = '';

  constructor() {}

  ngOnInit(): void {}
}
