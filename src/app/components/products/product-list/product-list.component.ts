import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductEvent } from 'src/app/models/product-event.interface';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  products: Product[] = [];

  @Output()
  productListEventEmitter: EventEmitter<ProductEvent> = new EventEmitter();

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onItemAction($event: ProductEvent) {
    this.productListEventEmitter.emit({
      type: $event.type
    })
  }
  
}
