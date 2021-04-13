import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page5Page } from '../page5/page5';
import { Page6Page } from '../page6/page6';
import { Page18Page } from '../page18/page18';
import { Page7Page } from '../page7/page7';
import { Page99Page } from '../page99/page99';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2Page {

  constructor(public navCtrl: NavController) {
  }
  goToPage5(params){
    if (!params) params = {};
    this.navCtrl.push(Page5Page);
  }goToPage6(params){
    if (!params) params = {};
    this.navCtrl.push(Page6Page);
  }goToPage18(params){
    if (!params) params = {};
    this.navCtrl.push(Page18Page);
  }goToPage7(params){
    if (!params) params = {};
    this.navCtrl.push(Page7Page);
  }goToPage99(params){
    if (!params) params = {};
    this.navCtrl.push(Page99Page);
  }
}
