import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class CustomersService {

  private _searchCustomerUrl = "http://localhost:9966/api/searchcustomer";

  constructor(private http: HttpClient, private _router: Router) { }

  getCustomer(user){
    return this.http.post<any>(this._searchCustomerUrl, user);
  }

  searchCustomer(){
    this._router.navigate(['/searchcustomer']);
  }
}
