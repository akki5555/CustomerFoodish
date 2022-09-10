import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';




@Component({
	selector: 'app-location',
	templateUrl: './location.page.html',
	styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

	// Readable Address
	address: string;

	// Location coordinates
	latitude: number;
	longitude: number;
	accuracy: number;

	//Geocoder configuration
	geoencoderOptions: NativeGeocoderOptions = {
		useLocale: true,
		maxResults: 5
	};

	customerAddress: any;

	constructor(private navCtrl: NavController, private geolocation: Geolocation,
		public httpClient: HttpClient,
		private nativeGeocoder: NativeGeocoder) { }

	ngOnInit() {
		// this.getGeolocation();
		this.getCustomerAdddress();
	}

	getCustomerAdddress() {
		const customerId = localStorage.getItem('customerId');
		const params = new HttpParams({
			fromObject: {
				customerId: customerId
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
					this.customerAddress = res.user;

				},
				err => console.log(err)
			);
	}

	//Get current coordinates of device
	getGeolocation() {
		this.geolocation.getCurrentPosition().then((resp) => {

			this.latitude = resp.coords.latitude;
			this.longitude = resp.coords.longitude;
			this.accuracy = resp.coords.accuracy;

			this.getGeoencoder(resp.coords.latitude, resp.coords.longitude);

		}).catch((error) => {
			alert('Error getting location' + JSON.stringify(error));
		});
	}

	//geocoder method to fetch address from coordinates passed as arguments
	getGeoencoder(latitude, longitude) {
		this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
			.then((result: NativeGeocoderResult[]) => {
				this.address = this.generateAddress(result[0]);
			})
			.catch((error: any) => {
				alert('Error getting location' + JSON.stringify(error));
			});
	}

	//Return Comma saperated address
	generateAddress(addressObj) {
		let obj = [];
		let address = "";
		for (let key in addressObj) {
			obj.push(addressObj[key]);
		}
		obj.reverse();
		for (let val in obj) {
			if (obj[val].length)
				address += obj[val] + ', ';
		}
		return address.slice(0, -2);
	}

	home(params: any) {
		const address = JSON.stringify(params);
		localStorage.setItem('customerAddress', address);
		this.navCtrl.navigateRoot(['./home'], { state: params });
	}
}
