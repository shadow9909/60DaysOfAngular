import { ModelModule } from './../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreComponent } from './store.component';

@NgModule({
  imports: [BrowserModule, ModelModule], //services are by default shared across all the modules in nature- no need to explicitly export them

  declarations: [StoreComponent], // register and launch
  exports: [StoreComponent], // sharing components across modules / exposing components to Injector!
})
export class StoreModule {} //?
