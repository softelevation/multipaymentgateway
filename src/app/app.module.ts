import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxStripeModule } from 'ngx-stripe';
import { NgxPayPalModule } from 'ngx-paypal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './multipayment/header/header.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { StripeComponent } from './payment/stripe/stripe.component';
import { PaypalComponent } from './payment/paypal/paypal.component';
import { BitcoinComponent } from './payment/bitcoin/bitcoin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserDetailsComponent,
    PaymentDetailsComponent,
    StripeComponent,
    PaypalComponent,
    BitcoinComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    ReactiveFormsModule,
	HttpClientModule,
    NgxStripeModule.forRoot('pk_test_g8NppZD3GWt35EgazEjyUSHU00zXy2kdS5'),
	NgxPayPalModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
