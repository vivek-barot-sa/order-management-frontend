import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _registerUrl = "http://localhost:9966/api/register";
  private _loginUrl = "http://localhost:9966/api/login";
  private _updateUserUrl = "http://localhost:9966/api/updateprofile";

  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user){
    return this.http.post<any>(this._loginUrl, user);
  }

  updateUser(user){
    return this.http.put<any>(this._updateUserUrl, user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  checkCustomerDashboard(){
    if(this.loggedIn && localStorage.getItem('role') === "purveyor"){
      return true;
    }else{
      return false;
    }
  }

  logoutUser(){
    localStorage.clear();
    this._router.navigate(['/login']);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  updateProfile(){
    this._router.navigate(['/updateProfile']);
  }
}