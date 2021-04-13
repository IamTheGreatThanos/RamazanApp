import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page65Page } from '../page65/page65';
import { Page69Page } from '../page69/page69';
import { Page68Page } from '../page68/page68';
import { Page70Page } from '../page70/page70';
import { Page71Page } from '../page71/page71';
import { Page64Page } from '../page64/page64';
import { Page60Page } from '../page60/page60';
import { Page61Page } from '../page61/page61';
import { Page62Page } from '../page62/page62';
import { Page63Page } from '../page63/page63';
import { Page100Page } from '../page100/page100';

@Component({
  selector: 'page-page59',
  templateUrl: 'page59.html'
})
export class Page59Page {

  constructor(public navCtrl: NavController) {
  }
  goToPage65(params){
    if (!params) params = {};
    this.navCtrl.push(Page65Page);
  }goToPage69(params){
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
  }goToPage64(params){
    if (!params) params = {};
    this.navCtrl.push(Page64Page);
  }goToPage60(params){
    if (!params) params = {};
    this.navCtrl.push(Page60Page);
  }goToPage61(params){
    if (!params) params = {};
    this.navCtrl.push(Page61Page);
  }goToPage62(params){
    if (!params) params = {};
    this.navCtrl.push(Page62Page);
  }goToPage63(params){
    if (!params) params = {};
    this.navCtrl.push(Page63Page);
  }goToPage100(params){
    if (!params) params = {};
    this.navCtrl.push(Page100Page);
  }
}
