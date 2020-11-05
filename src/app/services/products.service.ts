import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly API = `${environment.API}home`; //usado antes do link da api cair.

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<Product>(this.API)
  }
}
