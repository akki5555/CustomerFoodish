import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {

  constructor(private navCtrl: NavController,private route: Router) { }

  ngOnInit() {
  }

signin() {
    this.navCtrl.navigateRoot(['./signin']);
  } 
add_address() {
    this.route.navigate(['./add-address']);
  } 
}
