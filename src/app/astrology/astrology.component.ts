import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-astrology',
  templateUrl: './astrology.component.html',
  styleUrls: ['./astrology.component.scss']
})


export class AstrologyComponent implements OnInit {

  constructor() {  }

  ngOnInit() {
  	$(".astrology").bind("DOMMouseScroll mousewheel", function (event) {
  		console.log('hello'+ JSON.stringify(event));
  	});
  } 
}
