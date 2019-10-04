import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { PRODUCTS } from '../../mocks/product-data.mock';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = PRODUCTS;
    this.productService.testObservable();
  }

}
