import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  constructor(private route: Router,) { }

  ngOnInit() {
  }

 bankdatails() {
    this.route.navigate(['./sendbank']);
  } 
}
