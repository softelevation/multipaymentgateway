import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  strip_status = false;
  paypal_status = false;


  constructor(private router: Router) {}

  ngOnInit() {
  }

  // click_stripe(){
		// console.log('ddddddddd');
	// 	this.strip_status = true;
	// 	this.paypal_status = false;
  // }

  // click_paypal(){
	//   this.strip_status = false;
	//   this.paypal_status = true;
  // }


}
