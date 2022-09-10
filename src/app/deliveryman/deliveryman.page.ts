import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deliveryman',
  templateUrl: './deliveryman.page.html',
  styleUrls: ['./deliveryman.page.scss'],
})
export class DeliverymanPage implements OnInit {

  constructor(private route: Router,) { }

  ngOnInit() {
  }

 chat() {
    this.route.navigate(['./chat']);
  } 
}
