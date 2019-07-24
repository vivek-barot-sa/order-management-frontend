import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl = "http://localhost:9966/api/events";
  private _specialEventsUrl = "http://localhost:9966/api/specialEvents";

  constructor(private http: HttpClient) { }

  getEvents(){
    return this.http.get<any>(this._eventsUrl);
  }

  getSpecialEvents(){
    return this.http.get<any>(this._specialEventsUrl);
  }
}
