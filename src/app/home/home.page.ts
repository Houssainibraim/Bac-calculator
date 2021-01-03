import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  en:number;
  er:number;
  cc:number;

  newEn:number;
  newEr:number;
  newCc:number;
  finaleResult;

  calcule(){
    this.newEn = this.en*0.50;
    this.newEr = this.er*0.25;
    this.newCc = this.cc*0.25;

    this.finaleResult = this.newEn + this.newEr + this.newCc ;
    console.log(this.finaleResult)

  };

  constructor() {}




}
