import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';

// injector service only function to resolove dependency, it checks constructor for dependency
@Injectable()
export class ProductRepository {
  private products: Product[] = []; //instance of product
  private categories: string[] = [];
  //
  // write only dependency in the constructor (ProductRepository: dependent and StaticDataSource: dependency)
  // dependency should be an injectable
  //
  constructor(private dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe((data) => {
      this.products = data;
      this.categories = data
        .map((p) => p.category)
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }

  // getProducts(category: string = null): Product[] {
  //   return this.products.filter(
  //     (p) => category == null || category == p.category
  //   );
  // }
  // getProduct(id: number): Product {
  //   return this.products.find((p) => p.id == id);
  // }

  // products is not declared locally so this.categories is dependency and getCategories is dependent => on state change it will get triggered
  getCategories(): string[] {
    return this.categories;
  }

  // products is not declared locally so this.product is dependency and getProducts is dependent
  getProducts(category: string = null): Product[] {
    return this.products.filter(
      (p) => category == null || category == p.category
    );
  }
}
