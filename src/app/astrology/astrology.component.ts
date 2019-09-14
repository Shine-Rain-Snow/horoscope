import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';
import { fromEvent, Observable  } from 'rxjs';
import { map } from 'rxjs/operators';
// import * as mousewheel from 'jquery-mousewheel';
// var $ = require('jquery-browserify');
// require('jquery-mousewheel')($);
// import * as jqueryMousewheel from '../../assets/js/jquery.mousewheel.js';

@Component({
  selector: 'app-astrology',
  templateUrl: './astrology.component.html',
  styleUrls: ['./astrology.component.scss']
})


export class AstrologyComponent implements OnInit {
  
// @HostListener('window:scroll', ['$event']) public windowScrolled($event: Event) {
//     this.windowScrollEvent($event);
// }
// windowScrollEvent(e) {
//   console.log('scrolling');
// }
// @HostListener('window:scroll', ['$event'])
// onWindowScroll($event) {
//     console.log("scrolling...");
// }
  //  ngAfterViewInit(): void {

  //   const content = document.querySelector('.astrology');
  //   const scroll$ = fromEvent(content, 'scroll').pipe(map(() => content));

  //   scroll$.subscribe(element => {
  //     console.log("scrolling...");
  //   });
  // }





  constructor() { }

  ngOnInit() {
  window.addEventListener('scroll', this.scroll, true); //third parameter
 //  	$(".astrology").on('mousewheel', function(event) {
 //  		alert('d');
 //    	console.log(event.deltaX, event.deltaY, event.deltaFactor);
	// });
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
}

scroll = (event: any): void => {
  // Here scroll is a variable holding the anonymous function 
  // this allows scroll to be assigned to the event during onInit
  // and removed onDestroy
  // To see what changed:
  const number = event.srcElement.scrollTop;
  console.log(event);
  console.log('I am scrolling ' + number);
  };

  // onScroll(event) {
  //   alert('hey');
  //   console.log('what is scrolling');
  //   $(".astrology").on('mousewheel', function(event) {
  //     alert('d');
  //     console.log(event.deltaX, event.deltaY, event.deltaFactor);
  // });
  // }

}
