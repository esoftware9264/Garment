import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'left-menuBar',
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
