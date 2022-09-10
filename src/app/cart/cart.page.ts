import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.page.html',
	styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
	quantity: number = 0;
	totalCost: number = 0;
	cartInfo: any;
	restaurantData;
	constructor(private route: Router,
		public httpClient: HttpClient) {
		if (route.getCurrentNavigation().extras.state) {
			const pageName = this.route.getCurrentNavigation().extras.state;
			console.log(pageName)
			this.restaurantData = pageName;
		}
	}

	ngOnInit() {
		this.getCartInfo();
	}


	delivery_info() {
		const params = {
			'totalCost': this.totalCost + 5,
			'restaurant': this.restaurantData,
		}
		this.route.navigate(['./delivery'], { state: params });
	}


	getCartInfo() {
		const customerId = localStorage.getItem('customerId');
		const params = new HttpParams({
			fromObject: {
				customerId: customerId,
				restaurantId: this.restaurantData.id,
			}
		});
		console.log(params)
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/x-www-form-urlencoded',
			})
		};
		this.httpClient.post('http://localhost/demo/Api.php?apicall=getFoodItemForCart', params, httpOptions)
			.subscribe(
				(res: any) => {
					console.log(res);
					this.cartInfo = res['user'];
					debugger;
					this.totalCost = 0;
					this.cartInfo.forEach(element => {
						this.totalCost += parseInt(element.food_price);
					});
				},
				err => console.log(err)

			);
	}
}
