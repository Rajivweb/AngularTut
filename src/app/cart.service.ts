import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {IEmployee} from './employee';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CartService {
private _url: string = "https://jsonplaceholder.typicode.com/users"

  items = [];

    addToCart(product) {
    this.items.push(product);
  }

  constructor( private http: HttpClient) { }

  getItems(): Observable<IEmployee[]>{
    // return this.items;
    return this.http.get<IEmployee[]>(this._url)
                    .catch(this.errorHandler);
  }
  errorHandler(error:HttpErrorResponse){
    return Observable.throw(error.message || 'testing error');
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  

}