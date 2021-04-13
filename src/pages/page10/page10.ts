import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page45Page } from '../page45/page45';
import { Page46Page } from '../page46/page46';

@Component({
  selector: 'page-page10',
  templateUrl: 'page10.html'
})
export class Page10Page {

  constructor(public navCtrl: NavController) {
  }
  goToPage45(params){
    if (!params) params = {};
    this.navCtrl.push(Page45Page);
  }goToPage46(params){
    if (!params) params = {};
    this.navCtrl.push(Page46Page);
  }
}
