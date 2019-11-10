import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CustomerModel } from '../CustomerModel';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {
  Customers: CustomerModel[];

  constructor(private CustomerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.getAllCustomers();
  }
  getAllCustomers(): void {
    this.CustomerService.getAllCustomer().subscribe(data=>{
      this.Customers = data;
    });
  };
}
