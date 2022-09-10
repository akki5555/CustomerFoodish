import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
	foodCategory:any;
  constructor(public httpClient: HttpClient,) { }

  ngOnInit() {
	this.getAllFoodCategory();
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
				this.foodCategory= res.products
				// this.route.navigate(['./location']);
				//   sessionStorage.setItem('access_token', res.access_token);
				//   sessionStorage.setItem('refresh_token', res.refresh_token);
			},
			err => console.log(err)
		);
}
}
