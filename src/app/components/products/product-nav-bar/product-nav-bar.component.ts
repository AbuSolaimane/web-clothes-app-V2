import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductAction } from 'src/app/models/product-action.enum';
import { ProductEvent } from 'src/app/models/product-event.interface';

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {

  @Output()
  productEventEmitter: EventEmitter<ProductEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getAllProducts() {
    this.productEventEmitter.emit({
      type: ProductAction.GET_ALL_PRODUCTS
    });
  }

  getSelectedProducts() {
    this.productEventEmitter.emit({
      type: ProductAction.GET_SELECTED_PRODUCTS
    });
  }

  getAvailableProducts() {
    this.productEventEmitter.emit({
      type: ProductAction.GET_AVAILABLE_PRODUCTS
    });
  }

  onNewProduct() {
    this.productEventEmitter.emit({
      type: ProductAction.NEW_PRODUCT
    });
  }


  onSearch(value: any) {
    this.productEventEmitter.emit({
      type: ProductAction.SEARCH_PRODUCTS,
      payload: value.keyword
    });
  }


}
