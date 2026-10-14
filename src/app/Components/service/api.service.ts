import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  email: any;
  pswd: any;
  logres: any;
  cartCount: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    // private keycloakService: KeycloakService
  ) { }

  getApi(endpoint: string) {
    // console.log('get request url --> ', endpoint);
    return this.http.get(endpoint).pipe(
      map((uresponse: any) => {
        // console.log('GET API res', uresponse);
        return uresponse;
      }),
      // catchError(this.handleError<any>('error'))
    );
  }
  deleteApi(endpoint: string): Observable<any> {
    // console.log('delete request url --> ', endpoint);

    return this.http.delete(endpoint).pipe(
      map((uresponse: any) => {
        // console.log('delete API res', uresponse);
        return uresponse;
      }),
      // catchError(this.handleError<any>('error'))
    );
  }
  postApi(endpoint: string, data: any): Observable<any> {
    // console.log('post request url --> ', endpoint, data);
    return this.http.post<any>(endpoint, data).pipe(
      map((uresponse: Response) => {
        return uresponse;
      }),
      // catchError(this.handleError<any>('Login'))
    );
  }
  putApi(endpoint: string, data: any): Observable<any> {
    // console.log('put request url --> ', endpoint, data);
    return this.http.put(endpoint, data).pipe(
      map((uresponse: any) => {
        // console.log('PUT API response', uresponse);
        return uresponse;
      }),
      // catchError(this.handleError<any>('Login'))
    );
  }
}
