import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page29Page } from '../page29/page29';
import { Page30Page } from '../page30/page30';
import { Page31Page } from '../page31/page31';
import { Page32Page } from '../page32/page32';
import { Page33Page } from '../page33/page33';
import { Page34Page } from '../page34/page34';
import { Page35Page } from '../page35/page35';
import { Page36Page } from '../page36/page36';
import { Page37Page } from '../page37/page37';
import { Page39Page } from '../page39/page39';
import { Page38Page } from '../page38/page38';
import { Page40Page } from '../page40/page40';
import { Page41Page } from '../page41/page41';
import { Page42Page } from '../page42/page42';
import { Page43Page } from '../page43/page43';
import { Page44Page } from '../page44/page44';

@Component({
  selector: 'page-page14',
  templateUrl: 'page14.html'
})
export class Page14Page {

  constructor(public navCtrl: NavController) {
  }
  goToPage29(params){
    if (!params) params = {};
    this.navCtrl.push(Page29Page);
  }goToPage30(params){
    if (!params) params = {};
    this.navCtrl.push(Page30Page);
  }goToPage31(params){
    if (!params) params = {};
    this.navCtrl.push(Page31Page);
  }goToPage32(params){
    if (!params) params = {};
    this.navCtrl.push(Page32Page);
  }goToPage33(params){
    if (!params) params = {};
    this.navCtrl.push(Page33Page);
  }goToPage34(params){
    if (!params) params = {};
    this.navCtrl.push(Page34Page);
  }goToPage35(params){
    if (!params) params = {};
    this.navCtrl.push(Page35Page);
  }goToPage36(params){
    if (!params) params = {};
    this.navCtrl.push(Page36Page);
  }goToPage37(params){
    if (!params) params = {};
    this.navCtrl.push(Page37Page);
  }goToPage39(params){
    if (!params) params = {};
    this.navCtrl.push(Page39Page);
  }goToPage38(params){
    if (!params) params = {};
    this.navCtrl.push(Page38Page);
  }goToPage40(params){
    if (!params) params = {};
    this.navCtrl.push(Page40Page);
  }goToPage41(params){
    if (!params) params = {};
    this.navCtrl.push(Page41Page);
  }goToPage42(params){
    if (!params) params = {};
    this.navCtrl.push(Page42Page);
  }goToPage43(params){
    if (!params) params = {};
    this.navCtrl.push(Page43Page);
  }goToPage44(params){
    if (!params) params = {};
    this.navCtrl.push(Page44Page);
  }
}
