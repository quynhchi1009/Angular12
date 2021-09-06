import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from '../models/product.model';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  baseURL: string = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) { }

  public getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`http://localhost:3000/products/${id}`).pipe(
      map((data: any) => new Product().deserialize(data)),
      catchError(() => throwError('Product not found'))
    );
  }

  public getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`http://localhost:3000/products`).pipe(
      map((data: any[]) => data.map(data => new Product().deserialize(data)))
    );
  }
}
