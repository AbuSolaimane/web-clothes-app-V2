import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductAction } from 'src/app/models/product-action.enum';
import { ProductEvent } from 'src/app/models/product-event.interface';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  product?: Product;

  @Output()
  productItemEventEmitter: EventEmitter<ProductEvent> = new EventEmitter();

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(product: Product) {

    this.productService.select(product).subscribe(data =>{
      product.selected = data.selected;
    });

  }

  onDelete(id: number) {
    this.productService.deleteProduct(id).subscribe(data => {
      this.productItemEventEmitter.emit({
        type: ProductAction.GET_ALL_PRODUCTS
      })
    })
  }

  onEdit(id: number) {
    this.router.navigate(['/edit/'+id]);
  }

}
