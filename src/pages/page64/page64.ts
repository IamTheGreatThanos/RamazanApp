import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page60Page } from '../page60/page60';
import { Page61Page } from '../page61/page61';
import { Page62Page } from '../page62/page62';
import { Page63Page } from '../page63/page63';

@Component({
  selector: 'page-page64',
  templateUrl: 'page64.html'
})
export class Page64Page {

  constructor(public navCtrl: NavController) {
  }
  goToPage60(params){
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
  }
}
