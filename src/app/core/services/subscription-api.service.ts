import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Subscription } from "../models/inputs/subscription-input";
import { catchError, retry } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class SubscriptionApiService{
  basePath = 'https://ilanguage-api.herokuapp.com/';

  constructor(private http: HttpClient) { }

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

  handleError(error: HttpErrorResponse): Promise<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred: ', error.error.message);
    }
    else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.').toPromise();
  }

  addSubscription(item: any): Promise<Subscription>{
    return this.http.post<Subscription>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError)).toPromise();
  }




}
