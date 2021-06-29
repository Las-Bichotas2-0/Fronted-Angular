import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {throwError} from "rxjs";
import {UserInput} from "../models/inputs/user-input";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserApiService {


  basePath='https://ilanguage-318118.rj.r.appspot.com/api/topic';

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

  addUser(data: any): Promise<UserInput>{
    return this.http.post<UserInput>(this.basePath, JSON.stringify(data), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError)).toPromise();

  }

}
