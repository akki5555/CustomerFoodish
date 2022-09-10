import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itemsinfo',
  templateUrl: './itemsinfo.page.html',
  styleUrls: ['./itemsinfo.page.scss'],
})
export class ItemsinfoPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
	
 cart() {
    this.route.navigate(['./cart']);
  } 
}
 
