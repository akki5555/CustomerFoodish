import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-orderconfirm',
  templateUrl: './orderconfirm.page.html',
  styleUrls: ['./orderconfirm.page.scss'],
})
export class OrderconfirmPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

myorders() {
    this.navCtrl.navigateRoot(['./myorders']);
  } 
}
