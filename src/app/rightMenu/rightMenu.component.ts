import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './rightMenu.component.html',
  styleUrls: ['./rightMenu.component.css']
})
export class RightMenuComponent implements OnInit {

  constructor() {
   console.log("Right menu component here");
  }

  ngOnInit() {
  }

}
