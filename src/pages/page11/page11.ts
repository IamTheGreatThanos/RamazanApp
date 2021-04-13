import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page25Page } from '../page25/page25';
import { Page21Page } from '../page21/page21';
import { Page26Page } from '../page26/page26';
import { Page27Page } from '../page27/page27';
import { Page28Page } from '../page28/page28';
import { Page56Page } from '../page56/page56';
import { Page57Page } from '../page57/page57';
import { Page58Page } from '../page58/page58';

@Component({
  selector: 'page-page11',
  templateUrl: 'page11.html'
})
export class Page11Page {

  constructor(public navCtrl: NavController) {
  }
  goToPage25(params){
    if (!params) params = {};
    this.navCtrl.push(Page25Page);
  }goToPage21(params){
    if (!params) params = {};
    this.navCtrl.push(Page21Page);
  }goToPage26(params){
    if (!params) params = {};
    this.navCtrl.push(Page26Page);
  }goToPage27(params){
    if (!params) params = {};
    this.navCtrl.push(Page27Page);
  }goToPage28(params){
    if (!params) params = {};
    this.navCtrl.push(Page28Page);
  }goToPage56(params){
    if (!params) params = {};
    this.navCtrl.push(Page56Page);
  }goToPage57(params){
    if (!params) params = {};
    this.navCtrl.push(Page57Page);
  }goToPage58(params){
    if (!params) params = {};
    this.navCtrl.push(Page58Page);
  }
}
