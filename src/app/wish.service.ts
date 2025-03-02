import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { wishItem } from '../shared/models/wishItem';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }

  private getStandardOptions(): any {
    // return an object with several standard option that may or not be needed for the request to be successful
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  getWishes() {
    let options = this.getStandardOptions();

    // with URL instead of (/get-wish?format=json) use HttpParams
    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    })

    // just with get or POST method, it does not send it.
    // It calls an observable. Only does the get or post with .subscribe
    // Pipe to pipe in a process to catch the errors
    return this.http.get("wishes.json", options).pipe(catchError(this.handleError)); 
  }

  private handleError(error: HttpErrorResponse) {
    // if it is 0 then it's not a server error, it's a client or network error
    if (error.status === 0) {
      console.error('There is an issue with the client or network', error.error)
    } else {
      console.error('Server-side error:', error.error)
    }

    return throwError(() => new Error('Cannot retrieve wishes from the server. Please try again!'))
  }

  // private just because this is a way to know how to use the post request method
  // just to learn, not to use in this application
  private addWish(wish: wishItem){ 
    let options = this.getStandardOptions();

    // Headers are immutable so use set method to create copy of old one and add new stuff
    options.headers = options.headers.set('Authorization', 'value-needed');

    this.http.post("wishes.json", wish, options)
  }
}
