import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { NgModule } from '@angular/core';

//only angular entity should be registered here
@NgModule({
  providers: [StaticDataSource, ProductRepository], //register and launch services
})
export class ModelModule {}
