import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {
  }

  loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe(res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('fname', res.uname);
      if(res.role === "Purveyor"){
        this._router.navigate(['/purveyorDashboard']);
      }else{
        this._router.navigate(['/customerDashboard']);
      }
    }, err => console.log(err));
  }
}
