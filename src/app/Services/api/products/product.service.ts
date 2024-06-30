import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductRepresentation } from '../models/product-representation';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private baseurl : string='https://fakestoreapi.com/';
  constructor(
    private http:HttpClient
  ) { }
  getAllProductswithLimit(Limit :number =5):Observable<any>{
    const producturl:string=`${this.baseurl}products?Limit=${Limit}`;

return this.http.get<Array<ProductRepresentation>>(producturl)
  }

createProduct(product:ProductRepresentation):Observable<ProductRepresentation>{
  const producturl:string=`${this.baseurl}products`;

  return this.http.post<ProductRepresentation>(producturl,product);

}




}
