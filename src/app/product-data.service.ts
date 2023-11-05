import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  url = 'https://fakestoreapi.com/products';
  constructor(private http : HttpClient) { }
  products()
  {
    return this.http.get(this.url);
  }

}
