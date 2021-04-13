import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page66Page } from '../page66/page66';
import { Page67Page } from '../page67/page67';
import { Page103Page } from '../page103/page103';
import { Page141Page } from '../page141/page141';
import { Page142Page } from '../page142/page142';

@Component({
  selector: 'page-page23',
  templateUrl: 'page23.html'
})
export class Page23Page {

  constructor(public navCtrl: NavController) {
  }
  goToPage66(params){
    if (!params) params = {};
    this.navCtrl.push(Page66Page);
  }goToPage67(params){
    if (!params) params = {};
    this.navCtrl.push(Page67Page);
  }goToPage103(params){
    if (!params) params = {};
    this.navCtrl.push(Page103Page);
  }goToPage141(params){
    if (!params) params = {};
    this.navCtrl.push(Page141Page);
  }goToPage142(params){
    if (!params) params = {};
    this.navCtrl.push(Page142Page);
  }
}
