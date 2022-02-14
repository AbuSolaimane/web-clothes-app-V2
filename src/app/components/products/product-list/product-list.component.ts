import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(product: Product) {
    
  }

  onDelete(id: number) {

  }

  onEdit(id: number) {

  }
  
}