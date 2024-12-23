import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/catalog/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService{

  constructor(private http: HttpClient) {
    
   }

  getproducts() : Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>("/api/products");
  }

   
}
