import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { PRODUCTS } from '../../mocks/product-data.mock';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  //products: Product[]; // Via Subscribe
  products$: Observable<Product[]>; // Via async from the template

  constructor(private productService: ProductService) { }

  ngOnInit() {
    //this.products = PRODUCTS;
    //this.productService.testObservable();

    // Ex. Via Subscribe
    /*
        this.productService.getProducts().subscribe(
          (data: Product[]) => { this.products = data }
        ).unsubscribe();
    */
    // Ex. Via async from the template
    this.products$ = this.productService.getProducts();
  }

}
