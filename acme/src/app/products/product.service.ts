import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Iproduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'api/products/products.json';
  constructor(private http: HttpClient) {

  }
  getProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.apiUrl).pipe(
      tap(data => console.log('Products:' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage;
    if (err.error instanceOf ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      // handle server error
      errorMessage = 'Server error blah blah...';
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
