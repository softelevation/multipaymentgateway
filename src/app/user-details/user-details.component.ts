import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from './../multipayment/apiservice.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user_detail: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router, private myService: ApiserviceService) { }

  get fBlog() { return this.user_detail.controls; }

  ngOnInit() {
	  this.user_detail = this.fb.group({
		  first_name: ['', Validators.required],
		  last_name: ['', Validators.required],
		  email: ['', Validators.required],
		  phone: ['', Validators.required],
		  amount: ['', Validators.required]
		});
  }


  onSubmit(){
		this.submitted = true;
		if (this.user_detail.invalid) {
		  return;
		}
		this.myService.insert_user(this.user_detail.value).subscribe(result => {
			const redirect = '/payment';
			this.router.navigate([redirect]);
		})
  }

}
