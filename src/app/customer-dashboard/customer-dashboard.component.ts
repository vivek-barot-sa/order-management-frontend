import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})

export class CustomerDashboardComponent implements OnInit {
  
  customerName = localStorage.getItem('fname');
  
  constructor() {}

  ngOnInit() {
  }

}
