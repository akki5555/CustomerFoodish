import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
	selector: 'app-payment',
	templateUrl: './payment.page.html',
	styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
	restaurantData: { [k: string]: any; };

	constructor(private navCtrl: NavController, private route: Router,
		public httpClient: HttpClient,) {
		debugger
		const pageName = this.route.getCurrentNavigation().extras.state;
		console.log(pageName);
		this.restaurantData = pageName;
		debugger;
	}

	ngOnInit() {
	}

	orderconfirm() {
		this.navCtrl.navigateRoot(['./orderconfirm']);
	}



	updateOrderData() {
		const customerId = localStorage.getItem('customerId');
		const params = new HttpParams({
			fromObject: {
				customerId: customerId,
				restaurantId: this.restaurantData.restaurantData.restaurant.id,
				addressId: this.restaurantData.AddressId,
				totalCost: this.restaurantData.totalCost,
				restaunrtName: this.restaurantData.restaurantData.restaurant.name,
				addressName: this.restaurantData.selectedAdress.address,
				foodOrderStatus: 'Preparing',
			}
		});
		console.log(params)
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/x-www-form-urlencoded',
			})
		};
		this.httpClient.post('http://localhost/demo/Api.php?apicall=updateFoodOrder', params, httpOptions)
			.subscribe(
				(res: any) => {
					
					debugger;
					console.log(res);
					this.orderconfirm();
				},
				err => console.log(err)

			);
	}
}
