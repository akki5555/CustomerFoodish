import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {
	restaurants:any;
  constructor(private route: Router,
	public httpClient: HttpClient,) { }

  ngOnInit() {
	this.getAllRestaurants();
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
				this.restaurants = res.products
				// this.route.navigate(['./location']);
				//   sessionStorage.setItem('access_token', res.access_token);
				//   sessionStorage.setItem('refresh_token', res.refresh_token);
			},
			err => console.log(err)
		);
}

  restro_info() {
    this.route.navigate(['./restro-info']);
  } 
}
