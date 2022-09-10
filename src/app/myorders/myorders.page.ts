import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.page.html',
  styleUrls: ['./myorders.page.scss'],
})
export class MyordersPage implements OnInit {

  constructor(private route: Router,) { }

  ngOnInit() {
  }

 order_info() {
    this.route.navigate(['./order-info']);
  } 
 order_info2() {
    this.route.navigate(['./order-info2']);
  } 
}
