import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page50Page } from '../page50/page50';
import { Page51Page } from '../page51/page51';
import { Page52Page } from '../page52/page52';
import { Page53Page } from '../page53/page53';
import { Page54Page } from '../page54/page54';
import { Page55Page } from '../page55/page55';

@Component({
  selector: 'page-page24',
  templateUrl: 'page24.html'
})
export class Page24Page {

  constructor(public navCtrl: NavController) {
  }
  goToPage50(params){
    if (!params) params = {};
    this.navCtrl.push(Page50Page);
  }goToPage51(params){
    if (!params) params = {};
    this.navCtrl.push(Page51Page);
  }goToPage52(params){
    if (!params) params = {};
    this.navCtrl.push(Page52Page);
  }goToPage53(params){
    if (!params) params = {};
    this.navCtrl.push(Page53Page);
  }goToPage54(params){
    if (!params) params = {};
    this.navCtrl.push(Page54Page);
  }goToPage55(params){
    if (!params) params = {};
    this.navCtrl.push(Page55Page);
  }
}
