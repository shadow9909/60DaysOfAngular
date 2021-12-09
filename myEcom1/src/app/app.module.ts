import { StoreModule } from './store/store.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule],
  providers: [], // loads services
  bootstrap: [AppComponent],
})
export class AppModule {} //SRP load root component
