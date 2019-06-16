import { Component, OnInit } from '@angular/core';
import { Iproduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  showImage: boolean = false;
  _listFilter: string;
  filteredProducts: Iproduct[];
  products: Iproduct[] = [];

  get listFilter():string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  constructor(private productService: ProductService) {
    // this.listFilter = 'cart';
  }

  ngOnInit() {
    this.products = this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
    },
      error => this.errorMessage = <any>error
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): Iproduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Iproduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void {
    console.log(message);
  }
}
