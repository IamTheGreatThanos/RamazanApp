import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page69Page } from '../page69/page69';
import { Page68Page } from '../page68/page68';
import { Page70Page } from '../page70/page70';
import { Page71Page } from '../page71/page71';

@Component({
  selector: 'page-page65',
  templateUrl: 'page65.html'
})
export class Page65Page {

  constructor(public navCtrl: NavController) {
  }
  goToPage69(params){
    if (!params) params = {};
    this.navCtrl.push(Page69Page);
  }goToPage68(params){
    if (!params) params = {};
    this.navCtrl.push(Page68Page);
  }goToPage70(params){
    if (!params) params = {};
    this.navCtrl.push(Page70Page);
  }goToPage71(params){
    if (!params) params = {};
    this.navCtrl.push(Page71Page);
  }
}
