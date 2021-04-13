import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page47Page } from '../page47/page47';
import { Page16Page } from '../page16/page16';
import { Page15Page } from '../page15/page15';
import { Page48Page } from '../page48/page48';
import { Page102Page } from '../page102/page102';

@Component({
  selector: 'page-page22',
  templateUrl: 'page22.html'
})
export class Page22Page {

  constructor(public navCtrl: NavController) {
  }
  goToPage47(params){
    if (!params) params = {};
    this.navCtrl.push(Page47Page);
  }goToPage16(params){
    if (!params) params = {};
    this.navCtrl.push(Page16Page);
  }goToPage15(params){
    if (!params) params = {};
    this.navCtrl.push(Page15Page);
  }goToPage48(params){
    if (!params) params = {};
    this.navCtrl.push(Page48Page);
  }goToPage102(params){
    if (!params) params = {};
    this.navCtrl.push(Page102Page);
  }
}
