import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
	restaurants:any;
	foodCategory:any;
	addressInfo:any
	constructor(private route: Router,
		public httpClient: HttpClient,
		public menuCtrl: MenuController) {
		this.menuCtrl.enable(true);
		const customerAddress = localStorage.getItem('customerAddress');
		if(!customerAddress){
			if (route.getCurrentNavigation().extras.state) {
				const address = this.route.getCurrentNavigation().extras.state;
				console.log(address)
				debugger;
				this.addressInfo = address;
			}
		}else{
			this.addressInfo =JSON.parse(customerAddress);
		}

	}

	ngOnInit() {
		this.getAllFoodCategory();
		this.getAllRestaurants();
	}

	refine() {
		this.route.navigate(['./refine']);
	}
	cart() {
		this.route.navigate(['./cart']);
	}
	search() {
		this.route.navigate(['./search']);
	}
	restro_info(params:any) {
		this.route.navigate(['./restro-info'], { state: params });
	}
	restro() {
		this.route.navigate(['./restaurants']);
	}
	categories() {
		this.route.navigate(['./categories']);
	}

	getAllFoodCategory() {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/x-www-form-urlencoded',
			})
		};
		this.httpClient.get('http://localhost/demo/Api.php?apicall=getAllFoodCategory', httpOptions)
			.subscribe(
				(res: any) => {
					debugger
					console.log(res);
					this.foodCategory= res.products;
				},
				err => console.log(err)
			);
	}

	getAllRestaurants() {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/x-www-form-urlencoded',
			})
		};
		this.httpClient.get('http://localhost/demo/Api.php?apicall=getAllRestaurants', httpOptions)
			.subscribe(
				(res: any) => {
					debugger
					console.log(res);
					this.restaurants = res.products;
				},
				err => console.log(err)
			);
	}
}
