import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../../shared/constants';
import * as $ from 'jquery';

@Component({
  selector: 'app-ast-inner',
  templateUrl: './ast-inner.component.html',
  styleUrls: ['./ast-inner.component.scss']
})
export class AstInnerComponent implements OnInit {

  constructor(private router: Router) { }

  sunsign_description = {
      "aries": `Career and finance:
      2019 will not be easy. Saturn at your career sector is a period.it is a hard-working period, it’s the only way you can get rewarded. Saturn will stay one more year in your career sector, brings work delays and frustration especially in work relationship. Saturn is also represent your most ambitious goals and responsibility’s, so this year you will want to prove everyone what you can really do!! As being Aries, you are a natural born fighter and when problems arise you will usually fight back and expect to correct things .as Saturn will probably bring you career challenges this year remember to adapt a diplomatic approach and avoid being verbally aggressive! Jupiter will be in your 9th house of education and traveling. it will bring you luck in study and during traveling! Until March 2019 your income is predicted to be the same, after august 2019 you will have a great chance to gain more respect and recognition for your professional work. If you are in the middle of a litigation battle try and offer a compromising solution, it can save you money and time!
      Love and relationships:
      Your love one will be very demanding and you will often feel forced to agree to his demands. Controversies related to family interference, properties or finance will frustrate you and you will end up spending time on trying to find a way out.2019 is a  year full of romantic adventures, you can easily fall in love again especially while being away from home! As a single, getting marry under family pressure will be tough. Planning a baby is recommended only if your marriage relationship is strong and you can afford it financially.`,
      "taurus": `Career and finance: 
      A year full of important events, lots of traveling, new people will enter your life. The planet Uranus enter your sign and will stay there for 7 years! A sudden work change is expecting for those born in the first 8 days of the sign. If you are born in the first week of the sign you will be the most affected this year. Expect drastic changes in all life aspects, changes can come in surprise and as an earth sign it is probably not going to be easy for you to deal with unexpected events! Your health is also a very important issue this year. You must avoid putting on weight and change your eating habits if needed! Taurus kids can easily develop throat infection while adults must reduce sugar intake and drink more water than usual. The year will bring  many unique opportunities for growth, especially intellectual growth. Business partnerships can suffer from tension and may even reach a breaking point.2019 is good for your finance, you will be able to pay your debts and funds will come from more than one source! Your company might offer you to relocate or give you a job title that will require more responsibility. You must go with the flow this year and be open  to any career change that may come your way.
      Love & Relationships:
      Your love life is looking good this year. You must move forward and refuse to go back to a past relationship! You are in a very emotional period and can easily fall in love this year. It may be someone whom you are long waiting to be with or a sudden encounter with a person who will change your life. If you are long expecting to get pregnant then 2019 is a great time to fulfil your dream of becoming a mother. A love affair with someone you know since last year will be tested this year .u need stability and marriage is likely to happen if you will feel secure enough. It is important to keep your personal life in privet and avoid involving family in your  final decisions.`,
      "gemini": `Career and finance:
      2019 is a very unusual year. The year is mostly important for your finance and positive for your personal life! Your main goals this year are to improve your work efficiency and manage carefully your savings! This will be a very demanding and hectic year for your career progress. Neptune in your career sector is a fantastic aspect for artists and those into spiritual activity! You might as well discover yourself in this period, turn a hobby into a profession or discover a new ability that was always doormat inside you. On the other hand you must be more careful as Neptune can bring illusions and a hasty financial decision that will lead to a great loss! so here you must progress slowly and consult with professionals before making any critical decision.Your work performance will greatly improve this year , you will have new ideas for a business startup and your creativity will impress everyone .if you are employed then you will see new people  joining your organization and you will be inspire by them. Some of you will quit from a business partnership and become in depended others will decide to move abroad for work. In the first half of the year, especially in March April you will doubts yourself and feel worry about your financial future yet after October 2019 you will find the right solutions too many of your problems. 
      Love & Relationships:
      This a very lucky year for relationships. Jupiter in your 7th house of relationship is really a fantastic period to find love and settle down! You can fall in love during traveling, study abroad or at your work place. You can also improve your current relationship and reach better understanding with your spouse. You will be more realistic and down to earth this year. Some of you will make a sudden decision to settle down. Your horoscope show settling down will probably be with someone who is very deferent then you. Your partner will have deferent spending habits and deferent expectation. Make sure to talk about it before you give a commitment. It’s a beautiful period for singles, love is waiting for you everywhere.`,
      "cancer" : `Career and finance:
      The year 2019 will be a challenging year. Get ready for hard work, you can build yourself again and put a strong foundation for a better future. Work will be very interesting and you will start learning new working methods or make new investments! If you recently started a new job then your work quality will be very good and you will impress others with your performance. Work relationship may become a major aspect whether you will succeed or fail!    During the year you may get a new work offer that will slowly become a new source of income. Saturn in your relationship sector will bring family tension and problems with someone you work with since the last few years. You will be successful in solving a legal problem and do good business while being away from the country. In the beginning of the year an existing business Partnership will need your attention and it is recommended to manage the problems without creating problems. You will need to exercise regularly and be careful not to put on weight .eating healthy food will be very important to keep your body in a healthy condition. Remember that work will require you to be official, professional and much more focused than ever before.it will be wise to wait until July 2019 before taking a decision to become a self-employed. 
      Love & Relationships: 
      With Saturn in your love and relationship sector 2019 will test your current relationship! Those recently started dating will find it difficult to get a commitment! Your partner will be very demanding and will expect you to get rid of bad habits. Disloyalty or being selfish this year can cause you to lose someone you really love! If you are already married then you will have to compromise and expect your partner to disagree with some of your career decisions. Try to be more patient and give your love one lots of attention .long distance relationship will not work this year!`,
      
  }

  ngOnInit() {
    
   let self = this;
   this.scrolling(self); 
   var hei = $("body").height();
   $(".sunsign_text").children().css({
   	height: hei*0.4+'px'	
   });
   $(".sunsign_img").children().css({
   	height: hei*0.3+'px'	
   })
  }

  goAstrology() {
      this.router.navigate(['/astrology']);
  }

  goTarot() {
    this.router.navigate(['/tarot']);
  }

  scrolling(self) {
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
    let prev = 0;
    let next = 0;
  	element.bind("DOMMouseScroll mousewheel", function (event) {    
        
        $(".item_container").bind("DOMMouseScroll mousewheel", function (event) {  
            console.log($(".item_container").index(this));
            if ($(".item_container").index(this) == 0) {
                if(event.originalEvent.detail < 0) {
                    //scroll down
                    prev++;
                    if(prev > AppConstants.SCROLLING_COUNT) {
                        prev = 0;
                        self.goAstrology();
                    }
                }
            }
            if ($(".item_container").index(this) == 5) {
                if(event.originalEvent.detail > 0) {
                    //scroll up
                    next++;
                    if(next > AppConstants.SCROLLING_COUNT) {
                        next = 0;
                        self.goTarot();
                    }
                }
            }
        });
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
