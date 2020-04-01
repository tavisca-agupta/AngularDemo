import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProduct } from '../interfaces/IProduct';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  private _url = "product-data.json";
  constructor(private _http: HttpClient) { }

  GetMockString() {
    return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum reiciendis debitis animi eveniet. Harum quam deserunt ad distinctio labore, earum nihil, deleniti suscipit sint quae quas id nostrum, assumenda officia!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum reiciendis debitis animi eveniet. Harum quam deserunt ad distinctio labore, earum nihil, deleniti suscipit sint quae quas id nostrum, assumenda officia!";
  }
  getJsonData(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._url)
      .pipe(
        catchError((err) => {
          //console.log('error caught in service')
          //console.error(err);
          //Handle the error here
          return throwError(err);    //Rethrow it back to component
        })
      )
  }
}
