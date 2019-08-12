import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class OfferService {
  private _offerUrl = "http://localhost:9966/api/offer";

  constructor(private http: HttpClient, private _router: Router) { }

  addOffer(offer){
    return this.http.post<any>(this._offerUrl, offer);
  }
}
