import { Component } from '@angular/core';
import { AuthService } from '../Helpers/auth.service';
import { CustomersService } from '../Helpers/customers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'orderManagement';

  constructor(private _authService: AuthService, private _searchCustomerService: CustomersService){}
}
