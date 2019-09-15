import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-ast-inner',
  templateUrl: './ast-inner.component.html',
  styleUrls: ['./ast-inner.component.scss']
})
export class AstInnerComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
   this.scrolling(); 
   var hei = $("body").height();
   $(".sunsign_text").children().css({
   	height: hei*0.4+'px'	
   });
   $(".sunsign_img").children().css({
   	height: hei*0.3+'px'	
   })
  }

  scrolling() {
  	var defaults = {
        scrolling: true,
        amount: false
    };
    var x,left,down,newX,oldX,maxScrollLeft,am,amX,amL,leftElem,rightElem,currx,items,element,elements;
  	var element = $(".g-scrolling-carousel .items");
  	var amount = element.children(":first").outerWidth(true);
  	leftElem = $('<span />').addClass('jc-left');
    rightElem = $('<span />').addClass('jc-right');
    element.parent().append(leftElem).append(rightElem);

    maxScrollLeft = element.get(0).scrollWidth - element.get(0).clientWidth;
    left = element.scrollLeft();
    if(maxScrollLeft == left) {
        rightElem.hide();
    } else {
        rightElem.show();
    }
    if(left == 0) {
        leftElem.hide();
    } else {
        leftElem.show();
    }
  	element.bind("DOMMouseScroll mousewheel", function (event) {    
        var oEvent = event.originalEvent, 
        direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
        position = element.scrollLeft();
        position += direction > 0 ? -amount : amount;

        element.scrollLeft(position);
        event.preventDefault();
        maxScrollLeft = element.get(0).scrollWidth - element.get(0).clientWidth;
        left = element.scrollLeft();
        if(maxScrollLeft == left) {
            rightElem.fadeOut(200);
        } else {
            rightElem.fadeIn(200);
        }
        if(left == 0) {
            leftElem.fadeOut(200);
        } else {
            leftElem.fadeIn(200);
        }

    });
  }

}
