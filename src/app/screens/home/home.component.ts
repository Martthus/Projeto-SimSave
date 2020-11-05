import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[];

  constructor(private service: ProductsService) {
  }

  ngOnInit(): void {
    this.getProducts()
  }

  //Faz contato com API e faz a requisição.
  getProducts(): void {
    this.service.getAll()
      .subscribe(
        response => {
          this.products = response;
          console.log(this.products)
        },
        error => {
          console.log(error)
        });
  }
}
