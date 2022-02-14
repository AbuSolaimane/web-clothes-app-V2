import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductAction } from 'src/app/models/product-action.enum';
import { ProductEvent } from 'src/app/models/product-event.interface';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onAction($event: ProductEvent) {

    let type = $event.type;
    let payload = $event.payload;

    switch (type) {
      case ProductAction.GET_ALL_PRODUCTS:
        this.getAllProducts();
        break;

      case ProductAction.GET_SELECTED_PRODUCTS:
        this.getSelectedProducts();
        break;

      case ProductAction.GET_AVAILABLE_PRODUCTS:
        this.getAvailableProducts();
        break;

      case ProductAction.SEARCH_PRODUCTS:
        this.onSearch(payload);
        break;
      
      case ProductAction.NEW_PRODUCT:
        this.onNewProduct();
        break;
    }
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    })
  }

  getAvailableProducts() {
    this.productService.getAvailableProducts().subscribe(data =>{
      this.products = data
    }, err => {
      console.error(err)
    });
  }

  getSelectedProducts() {
    this.productService.getSelectedProducts().subscribe(data =>{
      this.products = data
    }, err => {
      console.error(err)
    });
  }

  onSearch(value: any) {
    this.productService.searchProducts(value.keyword).subscribe(data =>{
      this.products = data
    }, err => {
      console.error(err);
    });
  }

  onNewProduct() {
    this.router.navigate(['/add']);
  }

}
