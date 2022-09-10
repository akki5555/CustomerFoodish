import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-refine',
  templateUrl: './refine.page.html',
  styleUrls: ['./refine.page.scss'],
})
export class RefinePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
cart() {
    this.route.navigate(['./cart']);
  } 
}
