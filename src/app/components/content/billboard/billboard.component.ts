import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.css'],
})
export class BillboardComponent implements OnInit {
  @Input() url = '';

  constructor() {}

  ngOnInit(): void {}
}
