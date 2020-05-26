import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// import { UserDetailsComponent } from './user-details/user-details.component';
import { StripeComponent } from './stripe/stripe.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

const routes: Routes = [
	{
    path: '',
    children: [
      {path: 'payment', component: PaymentDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
