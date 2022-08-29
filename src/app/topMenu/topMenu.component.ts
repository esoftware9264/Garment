import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-menuBar',
  templateUrl: './topMenu.component.html',
  styleUrls: ['./topMenu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor() {
   console.log("TOP menu component here");
  }

  ngOnInit() {
  }

}
