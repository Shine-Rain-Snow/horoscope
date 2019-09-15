import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

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
    if($(".photo span:first-child").hasClass("active")){
     
        $(".photo span").css({
          visibility:'visible'
        });
        $(".photo span:nth-child(3)").css({
          visibility: 'hidden'
        });
        $(".photo").animate({
            top: '-=100%'
          }, 
          {
            duration: 11000,
            easing: "linear",
            complete: function() {
              
              $(".photo span:nth-child(3)").css({
                top: '100%'
              });
              $(".photo span:nth-child(2)").css({
                top: '0%'
              });
              $(".photo span:nth-child(1)").css({
                top: '100%'
              });
              $(".photo").css({
                top: '0%'
              });
              $(".photo span:first-child").removeClass('active');
              $(".photo span:nth-child(2)").addClass('active');
              $(".photo span:nth-child(2)").removeClass('prev');
              $(".photo span:nth-child(3)").addClass('prev');
            }
          });
          
    }

    if($(".photo span:nth-child(2)").hasClass("active")){
     
         $(".photo span").css({
          visibility:'visible'
          });
          $(".photo span:nth-child(1)").css({
            visibility: 'hidden'
          });
          $(".photo").animate({
            top: '-=100%'
          }, 
          {
            duration: 11000,
            easing: "linear",
            complete: function() {
              
              $(".photo span:nth-child(1)").css({
                top: '100%'
              });
              $(".photo span:nth-child(3)").css({
                top: '0%'
              });
              $(".photo span:nth-child(2)").css({
                top: '100%'  
              });
              $(".photo").css({
                top: '0%'
              });
              $(".photo span:nth-child(2)").removeClass('active');
              $(".photo span:nth-child(3)").addClass('active');
              $(".photo span:nth-child(3)").removeClass('prev');
              $(".photo span:nth-child(1)").addClass('prev');
            }
          });
          
    }

    if($(".photo span:nth-child(3)").hasClass("active")){
      
         $(".photo span").css({
          visibility:'visible'
          });
          $(".photo span:nth-child(2)").css({
            visibility: 'hidden'
          });
        $(".photo").animate({
            top: '-=100%'
          }, 
          {
            duration: 11000,
            easing: "linear",
            complete: function() {
              
              $(".photo span:nth-child(1)").css({
                top: '0%'
              });
              $(".photo span:nth-child(3)").css({
                top: '100%'
              });
              $(".photo span:nth-child(2)").css({
                top: '100%'  
              });
              $(".photo").css({
                top: '0%'
              });
              $(".photo span:nth-child(3)").removeClass('active');
              $(".photo span:nth-child(1)").addClass('active');
              $(".photo span:first-child").removeClass('prev');
              $(".photo span:nth-child(2)").addClass('prev');
            }
          });
    }
  }


  moveVideo() {
    if($(".movies span:first-child").hasClass("active")){
     
        $(".movies span").css({
          visibility:'visible'
        });
        $(".movies span:nth-child(3)").css({
          visibility: 'hidden'
        });
        $(".movies").animate({
            top: '-=100%'
          },
          {
            duration: 11000,
            easing: "linear",
            complete: function() {
              
              $(".movies span:nth-child(3)").css({
                top: '100%'
              });
              $(".movies span:nth-child(2)").css({
                top: '0%'
              });
              $(".movies span:nth-child(1)").css({
                top: '100%'
              });
              $(".movies").css({
                top: '0%'
              });
              $(".movies span:first-child").removeClass('active');
              $(".movies span:nth-child(2)").addClass('active');
              $(".movies span:nth-child(2)").removeClass('prev');
              $(".movies span:nth-child(3)").addClass('prev');
            }
          });
          
    }

    if($(".movies span:nth-child(2)").hasClass("active")){
     
         $(".movies span").css({
          visibility:'visible'
          });
          $(".movies span:nth-child(1)").css({
            visibility: 'hidden'
          });
          $(".movies").animate({
            top: '-=100%'
          },
          {
            duration: 11000,
            easing: "linear",
            complete: function() {
              
              $(".movies span:nth-child(1)").css({
                top: '100%'
              });
              $(".movies span:nth-child(3)").css({
                top: '0%'
              });
              $(".movies span:nth-child(2)").css({
                top: '100%'  
              });
              $(".movies").css({
                top: '0%'
              });
              $(".movies span:nth-child(2)").removeClass('active');
              $(".movies span:nth-child(3)").addClass('active');
              $(".movies span:nth-child(3)").removeClass('prev');
              $(".movies span:nth-child(1)").addClass('prev');
            }
          });
          
    }

    if($(".movies span:nth-child(3)").hasClass("active")){
      
         $(".movies span").css({
          visibility:'visible'
          });
          $(".movies span:nth-child(2)").css({
            visibility: 'hidden'
          });
        $(".movies").animate({
            top: '-=100%'
          },
          {
            duration: 11000,
            easing: "linear",
            complete: function() {
              
              $(".movies span:nth-child(1)").css({
                top: '0%'
              });
              $(".movies span:nth-child(3)").css({
                top: '100%'
              });
              $(".movies span:nth-child(2)").css({
                top: '100%'  
              });
              $(".movies").css({
                top: '0%'
              });
              $(".movies span:nth-child(3)").removeClass('active');
              $(".movies span:nth-child(1)").addClass('active');
              $(".movies span:first-child").removeClass('prev');
              $(".movies span:nth-child(2)").addClass('prev');
            }
          });
    }
  }
}