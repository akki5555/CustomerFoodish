import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuController, ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.page.html',
	styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

	fullName: string;
	emailAddress: string;
	createpassword: string;
	confirmPassword: string;
	selectCountry: string;
	phoneNumber: number;

	isFullName: boolean = false;
	isEmailAddress: boolean = false;
	isCreatepassword: boolean = false;
	isConfirmPassword: boolean = false;
	isSelectCountry: boolean = false;
	isphoneNumber: boolean = false;

	constructor(private route: Router,
		public toastController: ToastController,
		public httpClient: HttpClient) {
		// this.getProductById();
	}

	ngOnInit() {
	}
	verificaion() {
		this.route.navigate(['./verificaion']);
	}

	validation() {
		let isValid = false;
		if (this.fullName == undefined) {
			this.isFullName = true;
			isValid = true;
		} else {
			this.isFullName = false;
		}
		``
		if (this.emailAddress == undefined) {
			this.isEmailAddress = true;
			isValid = true;
		} else {
			this.isEmailAddress = false;
		}

		if (this.createpassword == undefined) {
			this.isCreatepassword = true;
			isValid = true;
		} else {
			this.isCreatepassword = false;
		}

		if (this.confirmPassword == undefined) {
			this.isConfirmPassword = true;
			isValid = true;
		} else {
			this.isConfirmPassword = false;
		}

		if (this.selectCountry == undefined) {
			this.isSelectCountry = true;
			isValid = true;
		} else {
			this.isSelectCountry = false;
		}
		debugger;
		if (this.phoneNumber == undefined) {
			this.isphoneNumber = true;
			isValid = true;
		} else {
			this.isphoneNumber = false;
		}

		return isValid;

		// this.fullName;
		// this.emailAddress;
		// this.confirmPassword;
		// this.createpassword;
		// this.phoneNumber;
		// this.selectCountry;
		debugger;
	}

	sendPostRequest() {
		this.validation()
		//return true;
		// const requestOptions = new RequestOptions({ headers: headers });
		const params = new HttpParams({
			fromObject: {
				username: this.fullName,
				email: this.emailAddress,
				password:this.confirmPassword,
				gender:'Male',
				country:'India',
				phoneNo: this.phoneNumber.toString()
			}
		});

		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/x-www-form-urlencoded',
			})
		};


		this.httpClient.post('http://localhost/demo/Api.php?apicall=signup', params, httpOptions)
			.subscribe(
				(res: any) => {
					console.log(res);
					this.presentToast();
					// this.route.navigate(['./location']);
					//   sessionStorage.setItem('access_token', res.access_token);
					//   sessionStorage.setItem('refresh_token', res.refresh_token);
				},
				err => console.log(err)
			);
	}

	public getProductById() {
		debugger;
		this.httpClient
			.get('http://localhost:4000/users/getById/3').subscribe(res => {
				console.log(res)
			}, error => {
				console.log(error)
			});
	}

	async presentToast() {
		const toast = await this.toastController.create({
		  message: 'Login successfull',
		  duration: 2000
		});
		toast.present();
	  }
}
