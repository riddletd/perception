import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class HeaderTitleComponent implements OnInit {
  @Input() siteTitle = '';

  constructor() { }

  ngOnInit(): void {
  }

}
