import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  imports: [RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone: true
})
export class ProductsComponent implements OnInit{
  products: any[] = []

  constructor(private store: ProductsService) {}
 
  ngOnInit(): void {
      this.store.getAllProducts().subscribe(products => {
        this.products = products
      })
  }
}
