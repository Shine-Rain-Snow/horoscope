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
    this.movePhoto();
    this.moveVideo();
     setInterval(this.movePhoto, 11600);
     setInterval(this.moveVideo, 11600);
  }
  movePhoto() {
    if($("span:first-child").hasClass("active")){
     
        $("span").css({
          visibility:'visible'
        });
        $("span:nth-child(3)").css({
          visibility: 'hidden'
        });
        $(".photo").animate({
            top: '-=100%'
          }, 
          {
            duration: 11000,
            easing: "linear",
            complete: function() {
              
              $("span:nth-child(3)").css({
                top: '100%'
              });
              $("span:nth-child(2)").css({
                top: '0%'
              });
              $("span:nth-child(1)").css({
                top: '100%'
              });
              $(".photo").css({
                top: '0%'
              });
              $("span:first-child").removeClass('active');
              $("span:nth-child(2)").addClass('active');
              $("span:nth-child(2)").removeClass('prev');
              $("span:nth-child(3)").addClass('prev');
            }
          });
          
    }

    if($("span:nth-child(2)").hasClass("active")){
     
         $("span").css({
          visibility:'visible'
          });
          $("span:nth-child(1)").css({
            visibility: 'hidden'
          });
          $(".photo").animate({
            top: '-=100%'
          }, 
          {
            duration: 11000,
            easing: "linear",
            complete: function() {
              
              $("span:nth-child(1)").css({
                top: '100%'
              });
              $("span:nth-child(3)").css({
                top: '0%'
              });
              $("span:nth-child(2)").css({
                top: '100%'  
              });
              $(".photo").css({
                top: '0%'
              });
              $("span:nth-child(2)").removeClass('active');
              $("span:nth-child(3)").addClass('active');
              $("span:nth-child(3)").removeClass('prev');
              $("span:nth-child(1)").addClass('prev');
            }
          });
          
    }

    if($("span:nth-child(3)").hasClass("active")){
      
         $("span").css({
          visibility:'visible'
          });
          $("span:nth-child(2)").css({
            visibility: 'hidden'
          });
        $(".photo").animate({
            top: '-=100%'
          }, 
          {
            duration: 11000,
            easing: "linear",
            complete: function() {
              
              $("span:nth-child(1)").css({
                top: '0%'
              });
              $("span:nth-child(3)").css({
                top: '100%'
              });
              $("span:nth-child(2)").css({
                top: '100%'  
              });
              $(".photo").css({
                top: '0%'
              });
              $("span:nth-child(3)").removeClass('active');
              $("span:nth-child(1)").addClass('active');
              $("span:first-child").removeClass('prev');
              $("span:nth-child(2)").addClass('prev');
            }
          });
    }
  }


  moveVideo() {
    if($("span:first-child").hasClass("active")){
     
        $("span").css({
          visibility:'visible'
        });
        $("span:nth-child(3)").css({
          visibility: 'hidden'
        });
        $(".video").animate({
            top: '-=100%'
          },
          {
            duration: 11000,
            easing: "linear",
            complete: function() {
              
              $("span:nth-child(3)").css({
                top: '100%'
              });
              $("span:nth-child(2)").css({
                top: '0%'
              });
              $("span:nth-child(1)").css({
                top: '100%'
              });
              $(".video").css({
                top: '0%'
              });
              $("span:first-child").removeClass('active');
              $("span:nth-child(2)").addClass('active');
              $("span:nth-child(2)").removeClass('prev');
              $("span:nth-child(3)").addClass('prev');
            }
          });
          
    }

    if($("span:nth-child(2)").hasClass("active")){
     
         $("span").css({
          visibility:'visible'
          });
          $("span:nth-child(1)").css({
            visibility: 'hidden'
          });
          $(".video").animate({
            top: '-=100%'
          },
          {
            duration: 11000,
            easing: "linear",
            complete: function() {
              
              $("span:nth-child(1)").css({
                top: '100%'
              });
              $("span:nth-child(3)").css({
                top: '0%'
              });
              $("span:nth-child(2)").css({
                top: '100%'  
              });
              $(".video").css({
                top: '0%'
              });
              $("span:nth-child(2)").removeClass('active');
              $("span:nth-child(3)").addClass('active');
              $("span:nth-child(3)").removeClass('prev');
              $("span:nth-child(1)").addClass('prev');
            }
          });
          
    }

    if($("span:nth-child(3)").hasClass("active")){
      
         $("span").css({
          visibility:'visible'
          });
          $("span:nth-child(2)").css({
            visibility: 'hidden'
          });
        $(".video").animate({
            top: '-=100%'
          },
          {
            duration: 11000,
            easing: "linear",
            complete: function() {
              
              $("span:nth-child(1)").css({
                top: '0%'
              });
              $("span:nth-child(3)").css({
                top: '100%'
              });
              $("span:nth-child(2)").css({
                top: '100%'  
              });
              $(".video").css({
                top: '0%'
              });
              $("span:nth-child(3)").removeClass('active');
              $("span:nth-child(1)").addClass('active');
              $("span:first-child").removeClass('prev');
              $("span:nth-child(2)").addClass('prev');
            }
          });
    }
  }
}