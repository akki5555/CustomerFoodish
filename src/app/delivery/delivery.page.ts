import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-delivery',
	templateUrl: './delivery.page.html',
	styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage implements OnInit {
	customerAddress: any;
	checkNumber = 1;
	SelectedData: any;
	restaurantData: { [k: string]: any; };

	constructor(private route: Router, public httpClient: HttpClient,) {
		if (route.getCurrentNavigation().extras.state) {
			debugger
			const pageName = this.route.getCurrentNavigation().extras.state;
			console.log(pageName)
			this.restaurantData = pageName;
			debugger;
		}
	}

	ngOnInit() {
		this.getCustomerAdddress();
	}

	payment() {
		const params = {
			'AddressId': this.checkNumber,
			'totalCost': this.restaurantData.totalCost,
			'restaurantData': this.restaurantData,
			'selectedAdress': this.SelectedData === undefined ? this.customerAddress[0] : this.SelectedData
		}
		this.route.navigate(['./payment'], { state: params });
	}
	add_address() {
		this.route.navigate(['./add-address']);
	}


	getCustomerAdddress() {
		const customerId = localStorage.getItem('customerId');
		const params = new HttpParams({
			fromObject: {
				customerId: customerId,
			}
		});

		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/x-www-form-urlencoded',
			})
		};
		this.httpClient.post('http://localhost/demo/Api.php?apicall=getCustomerLocation', params, httpOptions)
			.subscribe(
				(res: any) => {
					debugger
					console.log(res);
					this.customerAddress = res.user
				},
				err => console.log(err)
			);
	}

	checkCondition(address: any) {
		this.SelectedData = address;
		this.checkNumber = address.id;
	}

}
