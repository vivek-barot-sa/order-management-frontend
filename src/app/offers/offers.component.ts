import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Helpers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})

export class OffersComponent implements OnInit {

  addOfferData = {}

  constructor(private _auth: AuthService, private _router: Router, private _offer: AuthService) {
    if(!this._auth.loggedIn()){
      this._router.navigate(["/login"]);
    }
  }

  ngOnInit() {
  }

  addOffer(){
    this._auth.registerUser(this.addOfferData)
    .subscribe(
      res => {
        // localStorage.setItem('token', res.token);
        this._router.navigate(['/login']);
      },
      err => console.log(err)
    );
  }
}
