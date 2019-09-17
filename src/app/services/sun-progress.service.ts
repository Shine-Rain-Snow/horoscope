import { Injectable } from '@angular/core';
import { Globals } from '../shared/globals';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SunProgressService {

  constructor(public globals: Globals) { }

  mIntro;
  mAst;
  setIntroVal(value) {
    this.globals.gIntro =  value;
    this.mIntro = value;
  }

  getIntroVal() {
    return this.mIntro;
  }

  setAstVal(value) {
    this.globals.gAst =  value;
    this.mAst = value;
  }

  getAstVal() {
    return this.mAst;
  }
  
  // public getIntroVal(): any {
  //   const introObservable = new Observable(observer => {
  //          setTimeout(() => {
  //             observer.next(this.globals);
  //          }, 100);
  //   });
  //   return introObservable;
  // }

}
