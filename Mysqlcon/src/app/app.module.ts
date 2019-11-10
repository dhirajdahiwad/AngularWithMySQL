import { HttpClientModule, HttpClient } from '@angular/common/http';



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerService } from './customer.service';
import { ListCustomersComponent } from './list-customers/list-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    HttpClientModule
  ],
  providers: [HttpClientModule,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
