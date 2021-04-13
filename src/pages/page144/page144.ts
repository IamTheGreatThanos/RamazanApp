import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page170Page } from '../page170/page170';
import { Page166Page } from '../page166/page166';
import { Page167Page } from '../page167/page167';
import { Page168Page } from '../page168/page168';
import { Page169Page } from '../page169/page169';
import { Page131Page } from '../page131/page131';
import { Page132Page } from '../page132/page132';
import { Page133Page } from '../page133/page133';
import { Page134Page } from '../page134/page134';
import { Page136Page } from '../page136/page136';
import { Page137Page } from '../page137/page137';
import { Page138Page } from '../page138/page138';

@Component({
  selector: 'page-page144',
  templateUrl: 'page144.html'
})
export class Page144Page {

  constructor(public navCtrl: NavController) {
  }
  goToPage170(params){
    if (!params) params = {};
    this.navCtrl.push(Page170Page);
  }goToPage166(params){
    if (!params) params = {};
    this.navCtrl.push(Page166Page);
  }goToPage167(params){
    if (!params) params = {};
    this.navCtrl.push(Page167Page);
  }goToPage168(params){
    if (!params) params = {};
    this.navCtrl.push(Page168Page);
  }goToPage169(params){
    if (!params) params = {};
    this.navCtrl.push(Page169Page);
  }goToPage131(params){
    if (!params) params = {};
    this.navCtrl.push(Page131Page);
  }goToPage132(params){
    if (!params) params = {};
    this.navCtrl.push(Page132Page);
  }goToPage133(params){
    if (!params) params = {};
    this.navCtrl.push(Page133Page);
  }goToPage134(params){
    if (!params) params = {};
    this.navCtrl.push(Page134Page);
  }goToPage136(params){
    if (!params) params = {};
    this.navCtrl.push(Page136Page);
  }goToPage137(params){
    if (!params) params = {};
    this.navCtrl.push(Page137Page);
  }goToPage138(params){
    if (!params) params = {};
    this.navCtrl.push(Page138Page);
  }
}
