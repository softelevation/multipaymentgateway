import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';
import { NgxPayPalModule } from 'ngx-paypal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StripeComponent } from './stripe/stripe.component';
import { PaypalComponent } from './paypal/paypal.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    StripeComponent,
    PaypalComponent,
    UserDetailsComponent,
    PaymentDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot('pk_test_g8NppZD3GWt35EgazEjyUSHU00zXy2kdS5'),
	NgxPayPalModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
