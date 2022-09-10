import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';



@Component({
	selector: 'app-signin',
	templateUrl: './signin.page.html',
	styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
	password;
	email;
	isLogin: Boolean = false;
	constructor(private route: Router,
		public httpClient: HttpClient,
		public toastController: ToastController,
		public menuCtrl: MenuController) {
		this.menuCtrl.enable(false);
	}

	ngOnInit() {
	}

	location() {
		this.login(this.email, this.password)
		// this.route.navigate(['./location']);
	}
	signup() {
		this.route.navigate(['./signup']);
	}
	forgotpassword() {
		this.route.navigate(['./forgot']);
	}


	login(user: string, password: string) {
		debugger;
		const params = new HttpParams({
			fromObject: {
				email: user,
				password: password,
			}
		});

		const httpOptions = {
			headers: new HttpHeaders({
				"access-control-allow-origin": "*",
				'Access-Control-Allow-Headers': 'Content-Type, Authorization',
				'Access-Control-Allow-Methods': '*',
				'Content-Type': 'application/x-www-form-urlencoded',
			})
		};

		this.httpClient.post('http://localhost/demo/Api.php?apicall=login', params, httpOptions)
			.subscribe(
				(res: any) => {
					console.log(res);
					localStorage.setItem('isLogin', 'true')
					localStorage.setItem('customerId', res.user.user.id);
					localStorage.setItem('customerName', res.user.user.username);
					localStorage.setItem('customerEmail', res.user.user.email);
					localStorage.setItem('customerGender', res.user.user.gender);
					localStorage.setItem('customerPhoneNumber', res.user.user.phoneNo);
					this.presentToast();
					this.route.navigate(['./location']);
				},
				err => console.log(err)
			);
	}

	async presentToast() {
		const toast = await this.toastController.create({
			message: 'Login successfull',
			duration: 2000
		});
		toast.present();
	}

}
