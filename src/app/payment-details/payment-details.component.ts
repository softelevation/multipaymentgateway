import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  
  stripe_status = true;
  paypal_status = false;
  // paypal_status = true;
  
  constructor(private fb: FormBuilder) { }
  
  // get fBlog() { return this.payment_detail.controls; }

  ngOnInit() {
	  
  }
  
  	click_stripe(){
		// console.log('ddddddddd');
		this.stripe_status = true;
			this.paypal_status = false;
	  }

  click_paypal(){
	  this.stripe_status = false;
	  this.paypal_status = true;
  }
  // onSubmit () {
    
		// console.log('sssssssssss');
	
  // }

}
