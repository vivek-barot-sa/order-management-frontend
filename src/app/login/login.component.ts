import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Helpers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {}
  success = true;

  constructor(private _auth: AuthService, private _router: Router) {
    if(this._auth.loggedIn()){
      if(localStorage.getItem('role') === "purveyor"){
        this._router.navigate(['/purveyorDashboard']);
      }else{
        this._router.navigate(['/customerDashboard']);
      }
    }
  }

  ngOnInit() {
  }

  loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe(res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('fname', res.uname);
      localStorage.setItem('id', res.uid);
      localStorage.setItem('address', res.uaddress);
      localStorage.setItem('pincode', res.upincode);
      localStorage.setItem('email', res.uemail);
      localStorage.setItem('role', res.urole);

      if(localStorage.getItem('role') === "purveyor"){
        this._router.navigate(['/purveyorDashboard']);
      }else{
        this._router.navigate(['/customerDashboard']);
      }
      this.success = true;
    }, err => {console.log(err); this.success = false;});
  }
}
