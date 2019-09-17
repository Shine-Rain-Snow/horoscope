import { Component, OnInit } from '@angular/core';
import { SunProgressService } from '../../services/sun-progress.service';
import { Globals } from '../globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
  providers: [ Globals ],
})
export class ProgressbarComponent implements OnInit {

  constructor(private router: Router,
    public stateData: Globals, 
    private sunService: SunProgressService) { }
  introVal: number;
  astVal: number;
  tarotVal: number;
  aboutVal: number;
  counselingVal: number;

  myVar;
  ngOnInit() {
    //const introObervable = this.sunService.getIntroVal();
    //console.log(introObervable);
    // introObervable.subscribe((globalsData: Globals) => {
    //   console.log(globalsData);
    //   //this.introVal = gIntro;
    // });
    this.myVar = setInterval(() => {
      this.introVal = this.sunService.getIntroVal();
      this.astVal = this.sunService.getAstVal();
    }, 10);
    
    this.tarotVal = this.stateData.gTarot;
    this.aboutVal = this.stateData.gAbout;
    this.counselingVal = this.stateData.gCounseling;
  }

  ngOnDestroy() {
    clearInterval(this.myVar);
  }

  onIntro() {
    console.log(this.stateData);
    if(this.stateData.gIntro == 100) {
      this.stateData.gAst = 0;
      this.stateData.gTarot = 0;
      this.stateData.gAbout = 0;
      this.stateData.gCounseling = 0;
      this.sunService.setAstVal(0);
    }
    this.router.navigate(['/intro']);
  }
  
}
