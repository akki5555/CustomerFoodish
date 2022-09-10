import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verificaion',
  templateUrl: './verificaion.page.html',
  styleUrls: ['./verificaion.page.scss'],
})
export class VerificaionPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
location() {
    this.route.navigate(['./location']);
  }  
}
