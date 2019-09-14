import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'horoscope';
  supportsWheel: boolean = false;
  constructor() { }
  ngOnInit() {
   
	/* Add the event listeners for each event. */
	document.addEventListener('wheel', this.DoSomething);
	document.addEventListener('mousewheel', this.DoSomething);
	document.addEventListener('DOMMouseScroll', this.DoSomething);
  }  

  DoSomething (e) {
	  /* Check whether the wheel event is supported. */
	  if (e.type == "wheel") this.supportsWheel = true;
	  else if (this.supportsWheel) return;

	  /* Determine the direction of the scroll (< 0 → up, > 0 → down). */
	  //var delta = ((e.deltaY || -e.wheelDelta || e.detail) >> 10) || 1;

	  console.log(e);
  }
}
