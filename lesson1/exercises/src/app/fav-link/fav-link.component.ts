import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-link.component.html',
  styleUrls: ['./fav-link.component.css']
})
export class FavLinkComponent implements OnInit {
favLinks = ['https://www.google.com/','https://www.launchcode.org/' ];
  constructor() { }

  ngOnInit() {
  }

}
