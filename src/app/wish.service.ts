import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }

  getWishes() {
    // just with get or POST method, it does not send it.
    // It calls an observable. Only does the get or post with .subscribe
    return this.http.get("wishes.json"); 
  }
}
