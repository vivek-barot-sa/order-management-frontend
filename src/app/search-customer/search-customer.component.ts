import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { CustomersService } from '../Services/customers.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent implements OnInit {

  searchCustomer = {

  };
  amount: Number;

  hideCustomerDetail: boolean = true;

  constructor(private _auth: AuthService,private _searchCustomerService: CustomersService, private _router: Router) {
    if(!this._auth.loggedIn()){
      this._router.navigate(["/login"]);
    }
  }

  ngOnInit() {
  }

  searchUserById(){
    this._searchCustomerService.getCustomer(this.searchCustomer)
    .subscribe(
      res => {
        this.searchCustomer = res;
        this.hideCustomerDetail = false;
      },
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this.hideCustomerDetail = true;
            this._router.navigate(['/searchcustomer']);
          }
        }
      }
    );
  }

  searchAgain(){
    this.searchCustomer = '';
    this.hideCustomerDetail = true;
    this._router.navigate(['/searchcustomer']);
  }
}
