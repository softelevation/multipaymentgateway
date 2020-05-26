import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user_detail: FormGroup;
  // active_progressbar = 'user-details';
  
  constructor(private fb: FormBuilder, private router: Router) { }

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
  
  
  onSubmit () {
    
		console.log('sssssssssss');
	
  }

}
