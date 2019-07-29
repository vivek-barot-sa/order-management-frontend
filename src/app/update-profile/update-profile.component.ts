import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})

export class UpdateProfileComponent implements OnInit {

  updatedUserData = {
    id: localStorage.getItem('id'),
    name: localStorage.getItem('fname'),
    address: localStorage.getItem('address'),
    pincode: localStorage.getItem('pincode'),
    email: localStorage.getItem('email')
  }

  constructor(private _auth: AuthService, private _router: Router) {
    if(!this._auth.loggedIn()){
      this._router.navigate(["/login"]);
    }
  }

  ngOnInit() {
  }

  updateUser(){
    this._auth.updateUser(this.updatedUserData)
    .subscribe(res => {
        localStorage.setItem('fname', this.updatedUserData.name);
        localStorage.setItem('address', this.updatedUserData.address);
        localStorage.setItem('pincode', this.updatedUserData.pincode);
        localStorage.setItem('email', this.updatedUserData.email);

        this._router.navigate(['/purveyorDashboard']);
    }, err => console.log(err));
  }
}
