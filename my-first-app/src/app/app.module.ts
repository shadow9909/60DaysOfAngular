import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent], //registering the new components so that angular knows about it
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent], // component used while starting the application
})
export class AppModule {}
