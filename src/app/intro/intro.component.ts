import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$(document).ready(() => {
      $('.photo_1').css({
        'background-color': 'yellow', 
        'font-size': '200%'
      });
    });
  }
}
