import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { IProduct } from "./product";
import { catchError, tap } from "rxjs/operators";
//decorator
//it is provided in root to make it accessible in all components
@Injectable({
  providedIn : 'root'
})

export class ProductService {

  private productUrl = 'api/products/products.json';

  //depedency injection
  //angular will inject HTTP Client service instance into "http" variable
  constructor(private http: HttpClient) {

  }

  //tap operator -> to access emitted itesm without modifying it
  getProducts() : Observable<IProduct[]> {
      return this.http.get<IProduct[]>(this.productUrl).pipe(
        tap(data => console.log('All', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    // in real world app, send server to remote logging infrastructure instead of logging
    let errorMessage = '';
    if(err.error instanceof ErrorEvent) {
      // a client side or network error occurred.
      errorMessage = `An error occurred : ${err.error.message}`;
    } else {
      errorMessage = `Server returned code : ${err.status}, the error message is : ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
