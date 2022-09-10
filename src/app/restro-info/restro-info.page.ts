import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollDetail } from '@ionic/core';
import { IonSlides } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
	selector: 'app-restro-info',
	templateUrl: './restro-info.page.html',
	styleUrls: ['./restro-info.page.scss'],
})
export class RestroInfoPage implements OnInit {
	favorite_icon = false;
	showToolbar = false;
	segment = 0;
	@ViewChild('slides', { static: true }) slider: IonSlides;
	faqExpand1: boolean;
	faqExpand2: boolean;
	faqExpand3: boolean;
	faqExpand4: boolean;
	faqExpand5: boolean;
	restaurantData: any;
	foodCategoryItems: any;
	quantity: number = 0;
	totalCost:number = 0;
	constructor(private route: Router,
		public httpClient: HttpClient,) {
		if (route.getCurrentNavigation().extras.state) {
			const pageName = this.route.getCurrentNavigation().extras.state;
			console.log(pageName)
			this.restaurantData = pageName;
		}
	}

	ngOnInit() {
		this.getAllFoodItems();
	}

	toggleSaveIcon1() {
		this.favorite_icon = !this.favorite_icon;
	}

	onScroll($event: CustomEvent<ScrollDetail>) {
		if ($event && $event.detail && $event.detail.scrollTop) {
			const scrollTop = $event.detail.scrollTop;
			this.showToolbar = scrollTop >= 150;
		}
	}

	async segmentChanged() {
		await this.slider.slideTo(this.segment);
	}

	async slideChanged() {
		this.segment = await this.slider.getActiveIndex();
	}

	reset() {
		this.faqExpand1 = false;
		this.faqExpand2 = false;
		this.faqExpand3 = false;
		this.faqExpand4 = false;
		this.faqExpand5 = false;
	}

	faqExpandToggle1() {
		this.reset();
		this.faqExpand1 = !this.faqExpand1;
	}

	faqExpandToggle2() {
		this.reset();
		this.faqExpand2 = !this.faqExpand2;
	}

	faqExpandToggle3() {
		this.reset();
		this.faqExpand3 = !this.faqExpand3;
	}

	faqExpandToggle4() {
		this.reset();
		this.faqExpand4 = !this.faqExpand4;
	}

	faqExpandToggle5() {
		this.reset();
		this.faqExpand5 = !this.faqExpand5;
	}

	itemsinfo() {
		this.route.navigate(['./itemsinfo']);
	}
	cart() {
		debugger
		this.route.navigate(['./cart'], { state: this.restaurantData });
	}

	getAllFoodItems() {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/x-www-form-urlencoded',
			})
		};
		this.httpClient.get('http://localhost/demo/Api.php?apicall=getfooditems&id=1', httpOptions)
			.subscribe(
				(res: any) => {
					debugger
					console.log(res);
					this.foodCategoryItems = res.productingredients;
					// this.route.navigate(['./location']);
					//   sessionStorage.setItem('access_token', res.access_token);
					//   sessionStorage.setItem('refresh_token', res.refresh_token);
				},
				err => console.log(err)
			);
	}

	add(item) {
		debugger;
		if (item.qauntity != 5) {
			let qauntity = item.qauntity + 1 
			item.qauntity = qauntity;
			let itemTotalPrice = item.price * qauntity
			debugger
			const params = new HttpParams({
				fromObject: {
					customerId: '8',
					restaurantId: '1',
					food_quantity: qauntity.toString(),
					foodItemId: item.id,
					food_price: itemTotalPrice.toString()
				}
			});
			console.log(params)
			const httpOptions = {
				headers: new HttpHeaders({
					'Content-Type': 'application/x-www-form-urlencoded',
				})
			};
			this.httpClient.post('http://localhost/demo/Api.php?apicall=insertFoodItem', params, httpOptions)
				.subscribe(
					(res: any) => {
						console.log(res);
						this.totalCost= 0;
						res.user['user'].forEach(element => {
							 this.totalCost += parseInt(element.food_price);
						});
					},
					err => console.log(err)
					
				);
		}

	}

	remove(item) {
		if (item.qauntity != 0) {
			let qauntity = item.qauntity - 1
			item.qauntity = qauntity;
			let itemTotalPrice = item.price * qauntity
			debugger
			const params = new HttpParams({
				fromObject: {
					customerId: '8',
					restaurantId: '1',
					food_quantity: qauntity.toString(),
					foodItemId: item.id,
					food_price: itemTotalPrice.toString()
				}
			});
			console.log(params)
			const httpOptions = {
				headers: new HttpHeaders({
					'Content-Type': 'application/x-www-form-urlencoded',
				})
			};
			this.httpClient.post('http://localhost/demo/Api.php?apicall=insertFoodItem', params, httpOptions)
				.subscribe(
					(res: any) => {
						this.totalCost= 0;
						res.user['user'].forEach(element => {
							 this.totalCost += parseInt(element.food_price);
						});
					},
					err => console.log(err)
				);
		}
	}
}
