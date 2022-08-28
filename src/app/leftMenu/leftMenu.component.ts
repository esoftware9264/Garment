import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './leftMenu.component.html',
  styleUrls: ['./leftMenu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor() {
   console.log("Left menu component here");
  }

  ngOnInit() {
  }

}
