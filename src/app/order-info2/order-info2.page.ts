import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-info2',
  templateUrl: './order-info2.page.html',
  styleUrls: ['./order-info2.page.scss'],
})
export class OrderInfo2Page implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

 deliveryman() {
    this.route.navigate(['./deliveryman']);
  } 
}
