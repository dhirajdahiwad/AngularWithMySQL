import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerModel } from './CustomerModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://127.0.0.1:3000/";

  getAllCustomer(){
    return this.http.get<CustomerModel[]>(this.baseurl + 'Customer');
  }

  getProductById(id: string){
    return this.http.get<CustomerModel>(this.baseurl + 'Customer' + '/' + id);
  }

  addProduct(Customer: CustomerModel){
    return this.http.post(this.baseurl + 'Customer', Customer);
  }

  deleteProduct(id: string){
    return this.http.delete(this.baseurl + 'Customer' + '/' + id);
  }

  updateProduct(Customer: CustomerModel){
    return this.http.put(this.baseurl + 'Customer' + '/' + Customer._id, Customer);
  }

}
