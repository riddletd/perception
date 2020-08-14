import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-text',
  templateUrl: './price-text.component.html',
  styleUrls: ['./price-text.component.css'],
})
export class PriceTextComponent implements OnInit {
  @Input() price = 0;

  constructor() {}

  ngOnInit(): void {}
}
